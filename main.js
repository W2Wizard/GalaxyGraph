/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   main.js                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/26 20:59:50 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/06/27 15:08:27 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Constants

const canvas = document.getElementById('galaxy-graph');
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2
const translation = [0, 0]

let mouseDown = false;
let mouseZoom = 1;
const zoomOutMax = 0.2;
const zoomInMax = 1.5;

// Callbacks
///////////////////////////////////////////////////////////////////

canvas.onwheel = function(evt) {
	evt.preventDefault();

	// TODO: Zoom onto mouse position

	mouseZoom += evt.deltaY * -0.001; // Sensitivity
	console.info(mouseZoom)
	mouseZoom = Math.min(Math.max(zoomOutMax, mouseZoom), zoomInMax);
}

canvas.addEventListener("mousedown", function (evt) {
	mouseDown = true;
});

canvas.addEventListener("mousedown", function (evt) {
	mouseDown = true;
});

canvas.addEventListener("mouseup", function (evt) {
	mouseDown = false;
});

canvas.addEventListener("mousemove", function (evt) {
	// ctx.translate(evt.clientX, evt.clientY)
	if (mouseDown) {
		// Normalize mouse speed depending on zoom.
		translation[0] += evt.movementX * (1 / mouseZoom);
		translation[1] += evt.movementY * (1 / mouseZoom);
	}
});

// Types
///////////////////////////////////////////////////////////////////

class Project {

	draw = function () {
		let xpos = ((this.x - 3000) + canvas.width / 2) + translation[0];
		let ypos = ((this.y - 3000) + canvas.height / 2) + translation[1];

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

///////////////////////////////////////////////////////////////////


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
	ctx.scale(mouseZoom, mouseZoom)

	ctx.beginPath()
	ctx.fillStyle = "#fff"
	ctx.font = "35px Arial";

	const projects = getProjects();
	for (const project of projects)
		project.draw();
	requestAnimationFrame(draw);
}

// Entry
///////////////////////////////////////////////////////////////////

function makeGraph() {


	// Set canvas size

	requestAnimationFrame(draw);
}

makeGraph();
