/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   renderViewer.ts                                    :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 00:18:31 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/11 15:33:41 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

////////////////////////////////////////////////////////////////////////////////
// Constants
////////////////////////////////////////////////////////////////////////////////

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const search = document.getElementById('graph-search') as HTMLInputElement;
const projectData = document.getElementById('project-datalist') as HTMLDataListElement;
const ctx = canvas.getContext('2d');

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/* Graph config */
const canvasScale = isFirefox ? 1 : 2; // The upscaling of the canvas, higher is more resolution.

const config = {
	zoomSpeed: 1.1,						// Closer to 0 is slower.
	mouseWheelSpeed: 0.01,				// Higher value is faster.
	centerOffsetPos: 3000,				// The 'Center' of the galaxy graph, usually libft.
	startZoom: 1,						// Bigger value further, smaller closer.
	minZoom: 0.45,						// Smallest possible zoom.
	maxZoom: 10.0,						// Biggest possible zoom.
}

////////////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////////////

window.onload = function () {
	injectTransOverrides(ctx);

	// Set Canvas size
	canvas.width = canvasScale * (window.innerWidth - 16);
	canvas.height = canvasScale * (window.innerHeight - headerHeight - 16);

	init();
	resetCanvas();
	draw();
}

window.addEventListener("resize", function () {

	// Recalculate the canvas size
	canvas.width = canvasScale * (window.innerWidth - 16);
	canvas.height = canvasScale * (window.innerHeight - headerHeight - 16);

	resetCanvas();
	draw();
});

canvas.addEventListener('mousedown', function (evt) {

	lastMousePosition = getMousePosition(evt)

	dragStart = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	isDrag = false;
});

async function checkForCursor(pos: any) {
	for (const project of projects) {

		const dist = (project.data.x - pos.x) ** 2 + (project.data.y - pos.y) ** 2;

		if (dist > 500 ** 2) continue;
		if (project.intersects(pos.x, pos.y)) {
			canvas.style.cursor = "pointer";
			break;
		}
		canvas.style.cursor = "default";
	}
}

canvas.addEventListener('mousemove', function (evt) {

	lastMousePosition = getMousePosition(evt);
	isDrag = true;

	if (!dragStart)
	{
		checkForCursor(getMousePositionTransformed(evt));
		return;
	}

	const pt = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
	draw();
});

canvas.addEventListener('mouseup', function (evt) {
	dragStart = null;

	projects.forEach(function (element: Project) {

		const pos = getMousePositionTransformed(evt);

		if (element.selected = element.intersects(pos.x, pos.y))
			element.onClick();
	});

	draw();
});

canvas.addEventListener("mouseout", function () {
	dragStart = null;
});

const handleScroll = function (evt: any) {
	evt.preventDefault();

	if (lastMousePosition.x == 0 && lastMousePosition.y == 0)
		lastMousePosition = getMousePosition(evt);

	const delta = evt.wheelDelta * config.mouseWheelSpeed;
	if (delta)
		zoom(delta);
}

canvas.addEventListener('wheel', handleScroll);
canvas.addEventListener('mousewheel', handleScroll);

////////////////////////////////////////////////////////////////////////////////
// Editor
////////////////////////////////////////////////////////////////////////////////

search.onchange = (evt) => {
	projects.forEach(function (element: Project) {

		if (element.data.name == search.value) {
			setCanvasPosition(element.data.x, element.data.y);
			setCanvasZoom(element.data.x, element.data.y, 8);
			element.onClick();
			element.selected = true;
			draw();

			search.value = "";
			return;
		}
	});
}

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

let dragStart: DOMPoint;
let isDrag: boolean;
let projects: Project[] = [];
let factor = 0;
let lastMousePosition = {
	x: 0,
	y: 0
}

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param delta
 * @returns
 */
function zoom(delta: number) {

	factor = Math.pow(config.zoomSpeed, delta);

	// Clamp zoom
	// NOTE: The scale will always be uniform.
	let currentScale = (ctx as any).getScale().scaleX;
	let newScale = currentScale * factor

	if (newScale > config.maxZoom || newScale < config.minZoom)
		return


	const point = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	setCanvasZoom(point.x, point.y, factor);
	draw();
}

/**
 * Set the zoom for a given offset.
 * @param x X offset to which to apply the zoom.
 * @param y Y offset to which to apply the zoom.
 * @param amount The zoom amount, bigger value further (1), smaller closer (0)
 */
function setCanvasZoom(x: number, y: number, amount: number) {
	ctx.translate(x, y);
	ctx.scale(amount, amount);
	ctx.translate(-x, -y);
}

/**
 * Set the position of the current canvas translation to a given X and Y.
 * @param x The X position.
 * @param y The Y position
 */
function setCanvasPosition(x: number, y: number) {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	setCanvasTranslationOffsets(-x + (canvas.width / 2.0), -y + (canvas.height / 2.0))
}

/**
 * Reset the canvas back to the middle and reset to start zoom.
 */
function resetCanvas() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	setCanvasPosition(config.centerOffsetPos, config.centerOffsetPos);

	const point = (ctx as any).transformPoint(canvas.width / 2.0, canvas.height / 2.0);
	setCanvasZoom(point.x, point.y, config.startZoom);
}

/**
 * Get the current scaled but non-transformed mouse position from the event.
 * @param evt The event.
 * @returns The mouse position.
 */
function getMousePosition(evt: MouseEvent) {

	const x = (evt.offsetX || (evt.pageX - canvas.offsetLeft)) * canvasScale;
	const y = (evt.offsetY || (evt.pageY - canvas.offsetTop)) * canvasScale;

	return { x: x, y: y };
}

/**
 * Get the current scaled, transformed mouse position from the event.
 * @param evt The event.
 * @returns The mouse position.
 */
function getMousePositionTransformed(evt: MouseEvent) {

	const mousePos = getMousePosition(evt)
	const transPos = (ctx as any).transformPoint(mousePos.x, mousePos.y);

	return {
		x: transPos.x as number,
		y: transPos.y as number
	}
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

	ctx.lineWidth = 10;

	// Draw the lines of each project
	ctx.save();
	for (const project of projects)
		project.drawlines();
	ctx.restore();

	// Draw The core ranks
	// TODO: Check what cursus we are on, 42 for instance does not have this. Only 42Cursus.
	ctx.save();
	ctx.strokeStyle = Colors.LightGray;
	for (let i = 0, radius = 170; i < 6; i++, radius += 165) {
		ctx.beginPath();
		{
			ctx.arc(config.centerOffsetPos, config.centerOffsetPos, radius, Math.PI * 2, 0);
			ctx.stroke();
		}
		ctx.closePath();
	}
	ctx.restore();

	// Draw projects
	ctx.save();
	for (const project of projects)
		project.draw();
	ctx.restore();
}

function init() {

	// Fetch the data
	APIData.forEach(function (element: ProjectData) {

		let newProject: Project;
		switch (element.kind) {

			case "part_time":
			case "big_project":
			case "first_internship":
			case "second_internship":
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

		const name = element.name.toLowerCase();

		// HACK: Since IntraAPI V2 does not specifiy this kind.
		if (name.includes("module") && !name.includes("old-cpp")) {
			// Nor any way of marking a final module ...
			newProject = new Module(element);
			if (name.endsWith("08"))
				newProject.size = ProjectSizes.Project;
		}

		let option = document.createElement('option');
		option.value = element.name;
		projectData.appendChild(option);

		projects.push(newProject);
	});
}
