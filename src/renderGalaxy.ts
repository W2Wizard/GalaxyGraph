/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   renderGalaxy.ts                                    :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 00:18:31 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 17:02:37 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

////////////////////////////////////////////////////////////////////////////////
// Constants
////////////////////////////////////////////////////////////////////////////////

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const search = document.getElementById('graph-search') as HTMLInputElement;
const ctx = canvas.getContext('2d');

/* Graph config */

const zoomSpeed = 1.1;					// Closer to 0 is slower.
const mouseWheelSpeed = 0.01;			// Higher value is faster.
const centerOffsetPos = 3000;			// The 'Center' of the galaxy graph, usually libft.
const canvasScale = 3.0;				// The upscaling of the canvas, higher is more resolution.
const startZoom = canvasScale / 4.55;	// Bigger value further, smaller closer

////////////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////////////

window.onload = function () {

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

	// Restore tracked transforms
	untrackTransforms(ctx, backup);
	trackTransforms(ctx);
	resetCanvas();
	draw();
});

canvas.addEventListener('mousedown', function (evt) {

	lastMousePosition = getMousePosition(evt)

	dragStart = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	isDrag = false;
});

canvas.addEventListener('mousemove', function (evt) {

	lastMousePosition = getMousePosition(evt);
	isDrag = true;

	if (!dragStart)
		return;

	const pt = (ctx as any).transformPoint(lastMousePosition.x, lastMousePosition.y);
	ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
	draw();
});

canvas.addEventListener('mouseup', function (evt) {
	dragStart = null;

	projects.forEach(function (element: Project) {

		const pos = getMousePositionTransformed(evt);

		if (element.intersects(pos.x, pos.y)) {
			// TODO: Do something here, implement onAction for projects
			console.log("Project:", element.data.name);
			return;
		}
	});
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

search.addEventListener('submit', function (evt) {
	evt.preventDefault();

	projects.forEach(function (element: Project) {
		if (element.data.name.toLowerCase() == search.value) {
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			setCanvasPosition(element.data.x, element.data.y);
			draw();
			return;
		}
	});
});

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

let backup = trackTransforms(ctx);
let dragStart: DOMPoint;
let isDrag: boolean;
let projects: Project[] = [];
let factor = 0;
let lastMousePosition = {
	x: canvas.width / 2.0,
	y: canvas.height / 2.0
}

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

function centerCanvas() {
	setCanvasTranslationOffsets(-centerOffsetPos + (canvas.width / 2.0), -centerOffsetPos + (canvas.height / 2.0))
}

function setCanvasZoom(amount: number) {
	const point = (ctx as any).transformPoint(canvas.width / 2.0, canvas.height / 2.0);

	ctx.translate(point.x, point.y);
	ctx.scale(amount, amount);
	ctx.translate(-point.x, -point.y);
}

function setCanvasPosition(x: number, y: number) {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	setCanvasTranslationOffsets(-x + (canvas.width / 2.0), -y + (canvas.height / 2.0))
}

function resetCanvas() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	centerCanvas();
	setCanvasZoom(startZoom);
	draw();
}

function getMousePosition(evt: MouseEvent) {

	let x = evt.offsetX || (evt.pageX - canvas.offsetLeft);
	let y = evt.offsetY || (evt.pageY - canvas.offsetTop);

	x *= canvasScale;
	y *= canvasScale;

	return {x: x, y: y};
}

function getMousePositionTransformed(evt: MouseEvent) {

	let mousePos = getMousePosition(evt)
	let transPos = (ctx as any).transformPoint(mousePos.x, mousePos.y);

	return {
		x: transPos.x as number,
		y: transPos.y as number
	}
}

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

	ctx.save();
	ctx.lineWidth = 10;
	ctx.lineCap = "square";
	ctx.strokeStyle = Colors.LightGray;
	for (let i = 0, radius = 170; i < 6; i++, radius += 165.3) {
		ctx.beginPath();
		ctx.arc(centerOffsetPos, centerOffsetPos, radius, Math.PI * 2, 0);
		ctx.stroke();
		ctx.closePath();
	}
	ctx.restore();

	for (const project of projects)
		project.drawlines();

	for (const project of projects)
		project.draw();

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