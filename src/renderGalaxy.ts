/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   render.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 00:18:31 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 00:18:31 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

////////////////////////////////////////////////////////////////////////////////
// Constants
////////////////////////////////////////////////////////////////////////////////

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/**
 * Graph config
 */

const zoomSpeed = 1.1;
const mouseWheelSpeed = 0.01;

////////////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////////////

window.onload = function () {

	// Set Canvas size
	canvas.width = 1 * (window.innerWidth - 16);
	canvas.height = 1 * (window.innerHeight - headerHeight - 16);

	init();

	centerCanvas()
	draw();
}

window.addEventListener("resize", function () {

	// Recalculate the canvas size
	canvas.width = 1 * (window.innerWidth - 16);
	canvas.height = 1 * (window.innerHeight - headerHeight - 16);

	let oldOffsets = getCanvasTranslationOffsets()
	
	// oldOffsets.x /= factor
	// oldOffsets.y /= factor
	
	console.log(factor)
	
	// Restore tracked transforms
	untrackTransforms(ctx, backup);
	trackTransforms(ctx);

	setCanvasTranslationOffsets(oldOffsets.x, oldOffsets.y)
	draw();
});

canvas.addEventListener('mousedown', function (evt) {

	lastMousePosition = getMousePosition(evt)

	dragStart = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	isDrag = false;
});

canvas.addEventListener('mousemove', function (evt) {

	lastMousePosition = getMousePosition(evt)
	isDrag = true;

	if (!dragStart)
		return;

	const pt = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
	draw();
});

canvas.addEventListener('mouseup', function () {
	dragStart = null;
});

canvas.addEventListener("mouseout", function () {
	dragStart = null;
});

canvas.addEventListener('mousewheel', function (evt: any) {
	evt.preventDefault();

	const delta = evt.wheelDelta * mouseWheelSpeed;
	if (delta)
		zoom(delta);
});

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

let backup = trackTransforms(ctx);
let lastMousePosition = {
	x: canvas.width / 2.0,
	y: canvas.height / 2.0
}

let dragStart: DOMPoint, isDrag: boolean;
let projects: Project[] = [];

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

function centerCanvas() {
	setCanvasTranslationOffsets(-3000 + (canvas.width / 2.0), -3000 + (canvas.height / 2.0))
}

function getMousePosition(evt: MouseEvent) {
	return {
		x: evt.offsetX || (evt.pageX - canvas.offsetLeft),
		y: evt.offsetY || (evt.pageY - canvas.offsetTop)
	}
}

function getMousePositionTransformed(evt: MouseEvent) {

	let mousePos = getMousePosition(evt)
	let transPos = (ctx as any).transformPoint(mousePos.x, mousePos.y);

	return {
		x: transPos.x as number,
		y: transPos.y as number
	}
}

let factor = 0

function zoom(delta: number) {
	const point = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);

	// TODO: Revisit this!
	factor = Math.pow(zoomSpeed, delta)

	// Set canvas origin to point, then scale and revert.
	ctx.translate(point.x, point.y);
	ctx.scale(factor, factor);
	ctx.translate(-point.x, -point.y);

	draw();
}

////////////////////////////////////////////////////////////////////////////////
// Main
////////////////////////////////////////////////////////////////////////////////

function draw() {

	// Clear and restore.
	ctx.save();
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.restore();

	for (const project of projects)
		project.drawlines();

	for (const project of projects)
		project.draw();

	ctx.save();
	ctx.lineWidth = 5;
	ctx.strokeStyle = Colors.LightGray;
	for (let i = 0, radius = 170; i < 6; i++, radius += 165.3) {
		ctx.beginPath();
		ctx.arc(3000, 3000, radius, Math.PI * 2, 0);
		ctx.stroke();
		ctx.closePath();
	}
	ctx.restore();
}

function init() {

	// Fetch the data
	APIData.forEach(function (element: ProjectData) {

		let newProject: Project;
		switch (element.kind) {

			case "big_project":
				newProject = new Project(element);
				newProject.size = ProjectSizes.BigProject;
				break;

			case "exam":
				newProject = new Exam(element);
				break;

			case "rush":
				newProject = new Rush(element);
				break;

			case "piscine":
				newProject = new Piscine(element);
				break;

			default:
				newProject = new Project(element);
				break;
		}

		// HACK: Since IntraAPI V2 does not specifiy this kind.
		if (element.name.toLowerCase().includes("module"))
			newProject = new Module(element);
		// HACK: Because 42 is so competent they HARDCODE the size of transendence in intra ...
		else if (element.name == "ft_transendence") {
			newProject.size = ProjectSizes.BigProject;
		}

		projects.push(newProject);
	});
}