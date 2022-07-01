/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   GraphRendering.js                                  :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/29 12:56:35 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/06/30 11:14:51 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Types
////////////////////////////////////////////////////////////////////////////////

// TODO: TEMP, move this to different file! Just a scratch pad
class Project {

	draw = function () {

		const backgroundScale = 3;
		const foregroundScale = backgroundScale - 0.2;

		// Hard coded 3000 Because libft is the 'center'
		let xpos = (((this.x - 3000)) + camOffset[0]) + (canvas.width / 2);
		let ypos = (((this.y - 3000)) + camOffset[1]) + (canvas.height / 2);

		// Background
		ctx.beginPath()
		ctx.fillStyle = "#6F7278"
		ctx.arc(xpos, ypos, this.radius * backgroundScale, circle, false);
		ctx.fill();

		// Foreground
		ctx.beginPath()
		ctx.fillStyle = "#46484C"
		ctx.arc(xpos, ypos, this.radius * foregroundScale, circle, false);
		ctx.fill();

		// Name
		ctx.beginPath()
		// TODO: Scale the text based on its length and sphere radius
		ctx.font = `normal bold ${this.radius}px Arial`;
		ctx.fillStyle = "#6F7278"
		ctx.textAlign = 'center';
		// NOTE: 
		ctx.fillText(this.name, xpos, ypos + this.radius / foregroundScale);
		ctx.fill();
	};

	/**
	 *@param {number} x - Project X loc.
	 *@param {number} y - Project Y loc.
	 *@param {string} kind - Project Type.
	 *@param {string} name - The title of the book.
	 */
	constructor(x, y, kind, name) {
		this.x = x
		this.y = y
		this.name = name

		// Determine size of project based on kind.
		switch (kind) {
			case "big_project":
				this.radius = 23;
				break;
			case "exam":
				this.radius = 15;
				break;
			case "piscine":
				this.radius = 15;
				break;
			default:
				this.radius = 18;
				break;
		}

		// Patch file...
		if (this.name.startsWith("CPP")) {
			this.radius = 10;
		}
		if (this.name.endsWith("08")) {
			this.radius = 15;
		}

	}
}

// Constants
////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('galaxy-graph');
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2
const camOffset = [0, 0]

const projects = getProjects();

let mouseDown = false;
let mouseZoom = 1;

// n > 0: ZoomIn && n < 0: Zoom out
const zoomMax = 0.5;
const zoomMin = 3.5;
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

canvas.addEventListener("touchstart", (evt) => {
	// ctx.translate(evt.clientX, evt.clientY)
	camOffset[0] = -((evt.touches[0].clientX * (1 / mouseZoom)) * mouseSpeed);
	camOffset[1] = -((evt.touches[0].clientY * (1 / mouseZoom)) * mouseSpeed);
});

canvas.addEventListener("mousemove", (evt) => {
	// ctx.translate(evt.clientX, evt.clientY)
	if (mouseDown) {
		// Normalize mouse speed depending on zoom.
		camOffset[0] += ((evt.movementX * (1 / mouseZoom)) * mouseSpeed);
		camOffset[1] += ((evt.movementY * (1 / mouseZoom)) * mouseSpeed);
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

	// Draw circles
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#6F7278';

	// Rank 1 (2)
	ctx.beginPath();
	ctx.arc(camOffset[0] + canvas.width / 2, camOffset[1] + canvas.height / 2, 1000, 0, circle, false);
	ctx.stroke();

	// Rank 2 (3)
	ctx.beginPath();
	ctx.arc(camOffset[0] + canvas.width / 2, camOffset[1] + canvas.height / 2, 800, 0, circle, false);
	ctx.stroke();

	// Rank 3 (4)
	ctx.beginPath();
	ctx.arc(camOffset[0] + canvas.width / 2, camOffset[1] + canvas.height / 2, 600, 0, circle, false);
	ctx.stroke();

	// Rank 4 (5)
	ctx.beginPath();
	ctx.arc(camOffset[0] + canvas.width / 2, camOffset[1] + canvas.height / 2, 400, 0, circle, false);
	ctx.stroke();

	// Rank 5 (6)
	ctx.beginPath();
	ctx.arc(camOffset[0] + canvas.width / 2, camOffset[1] + canvas.height / 2, 200, 0, circle, false);
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