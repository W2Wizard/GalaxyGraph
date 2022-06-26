/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   main.js                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/26 20:59:50 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/06/26 20:59:50 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

// Constants

const canvas = document.getElementById('galaxy-graph')
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2

// Callbacks
///////////////////////////////////////////////////////////////////

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	draw();
})

canvas.addEventListener("mousedown", function (evt) {
});


canvas.addEventListener("mousemove", function (evt) {
});

// Types
///////////////////////////////////////////////////////////////////

class Project {

	draw = function () {
		let xpos = this.x + canvas.width / 2;
		let ypos = this.y + canvas.height / 2;

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

function getProjects() {
	let projects = [];

	data.forEach(function (element) {
		projects.push(new Project(element.x, element.y, element.kind, element.name));
	});

	return projects;
}

function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.scale(0.6, 0.6);
	ctx.font = "35px Arial";

	// Insanely badly hardcoded
	let xpos = 3000 + canvas.clientWidth / 2;
	let ypos = 3000 + canvas.clientHeight / 2;

	ctx.beginPath();
	ctx.arc(xpos, ypos, 975, circle, false); // Rank 01
	ctx.arc(xpos, ypos, 835, circle, false); // Rank 02
	ctx.arc(xpos, ypos, 670, circle, false); // Rank 03
	ctx.arc(xpos, ypos, 525, circle, false); // Rank 04
	ctx.arc(xpos, ypos, 340, circle, false); // Rank 05
	ctx.arc(xpos, ypos, 165, circle, false); // Rank 06
	ctx.lineWidth = 10;
	ctx.stroke();

	const projects = getProjects();
	for (const project of projects)
		project.draw();
}

// Entry
///////////////////////////////////////////////////////////////////

function makeGraph() {


	// Set canvas size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	requestAnimationFrame(draw);
}

makeGraph();
