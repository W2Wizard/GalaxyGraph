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

const gkhead = new Image;
gkhead.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/PigExtensive1.jpg/822px-PigExtensive1.jpg?20060903094429';

/**
 * Graph config
 */

const zoomSpeed = 1.1;
const mouseWheelSpeed = 0.01;

////////////////////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////////////////////

window.onload =  function()  {

	// Set Canvas size
	canvas.width = 1 * (window.innerWidth - 16);
	canvas.height = 1 * (window.innerHeight - headerHeight - 16);

	draw();
}

window.addEventListener("resize", function () {

	// Recalculate the canvas size
	canvas.width = 1 * (window.innerWidth - 16);
	canvas.height = 1 * (window.innerHeight - headerHeight - 16);

	// Restore tracked transforms
	untrackTransforms(ctx, backup);
	trackTransforms(ctx);

	draw();
});

canvas.addEventListener('mousedown', function (evt) {
	
	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);

	dragStart = (ctx as any).transformPoint(lastX, lastY);
	isDrag = false;
});

canvas.addEventListener('mousemove', function (evt) {

	lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
	lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);

	isDrag = true;

	if (!dragStart) return;

	const pt = (ctx as any).transformPoint(lastX, lastY);
	ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);

	draw();
});

canvas.addEventListener('mouseup', function () {
	dragStart = null;
});

canvas.addEventListener("mouseout", function () {
	dragStart = null;
});

canvas.addEventListener('mousewheel', function(evt: any) 
{
	evt.preventDefault();

	const delta = evt.wheelDelta * mouseWheelSpeed;
	if (delta) zoom(delta);
});

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

let backup = trackTransforms(ctx);
let lastX = canvas.width / 2, lastY = canvas.height / 2;
let dragStart: DOMPoint, isDrag: boolean;

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////

function zoom(delta: number) {
	const point = (ctx as any).transformPoint(lastX, lastY);

	// TODO: Revisit this!
	const factor = Math.pow(zoomSpeed, delta)

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

	ctx.drawImage(gkhead, 200, 50);
}
