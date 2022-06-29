/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   GraphRendering.js                                  :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/29 12:56:35 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/06/29 13:28:18 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Types
////////////////////////////////////////////////////////////////////////////////

// TODO: TEMP, move this to different file! 
class Project {

	draw = function () {
		let xpos = ((this.x - 3000)) + translation[0];
		let ypos = ((this.y - 3000)) + translation[1];

		ctx.beginPath()
		ctx.fillStyle = this.color
		ctx.fillText(this.name, xpos, ypos - this.radius * 4);
		ctx.arc(xpos, ypos, this.radius * 3, circle, false)
		ctx.fill()
	};

	constructor(x, y, kind, name) {
		this.x = x
		this.y = y
		this.name = name

		// Determine size of project based on kind.
		switch (kind) {
			case "big_project":
				this.radius = 20;
				this.color = '#7f8c8d'
				break;
			case "exam":
				this.radius = 15;
				this.color = '#ffa085'
				break;
			case "piscine":
				this.radius = 10;
				this.color = '#16a085'
				break;
			default:
				this.radius = 10;
				this.color = '#bdc3c7'
				break;
		}

	}
}

// Constants
////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('galaxy-graph');
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2
const translation = [0, 0]

const projects = getProjects();

let mouseDown = false;
let mouseZoom = 1;

// n > 0: ZoomIn && n < 0: Zoom out
const zoomMax = 0.2;
const zoomMin = 1.5;
const mouseSpeed = 1.5;

// Misc Functions TODO: Move these!
///////////////////////////////////////////////////////////////////

/**
 * Clamps a number between two values.
 * @param {number} num 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function clamp (num, min, max) {
	return Math.min(Math.max(num, min), max);
}

// Event Listeners
////////////////////////////////////////////////////////////////////////////////

canvas.onwheel = function(evt) {
	evt.preventDefault();

	// TODO: Zoom onto mouse position

	// Delta is way too big here, lower it.
	mouseZoom += evt.deltaY * -0.001;
	mouseZoom = clamp(mouseZoom, zoomMax, zoomMin);
}

canvas.addEventListener("mousedown", function (evt) {
	mouseDown = true;
});

canvas.addEventListener("mouseup", function (evt) {
	mouseDown = false;
});

canvas.addEventListener("mousemove", (evt) => {
	// ctx.translate(evt.clientX, evt.clientY)
	if (mouseDown) {
		// Normalize mouse speed depending on zoom.
		translation[0] += (evt.movementX * (1 / mouseZoom)) * mouseSpeed;
		translation[1] += (evt.movementY * (1 / mouseZoom)) * mouseSpeed;
	}
});

// Functions
////////////////////////////////////////////////////////////////////////////////

function getProjects() {
	let projects = [];

	data.forEach(function (element) {
		projects.push(new Project(element.x, element.y, element.kind, element.name));
	});

	return projects;
}

function draw() {

	ctx.clearRect(0,0,canvas.width,canvas.height);

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.scale(mouseZoom, mouseZoom);

	ctx.fillStyle = "#fff"
	ctx.font = "35px Arial";

	// Draw circles
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#6F7278';

	ctx.beginPath();
	ctx.arc(translation[0], translation[1], 1000, 0, circle, false);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(translation[0], translation[1], 800, 0, circle, false);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(translation[0], translation[1], 600, 0, circle, false);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(translation[0], translation[1], 400, 0, circle, false);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(translation[0], translation[1], 200, 0, circle, false);
	ctx.stroke();

	// Draw the projects
	for (const project of projects)
		project.draw();
	requestAnimationFrame(draw);
}

function renderGraph() {
	draw();
}

renderGraph();