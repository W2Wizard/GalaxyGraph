/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   renderGalaxy.ts                                    :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/04 22:14:40 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/04 22:14:40 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

////////////////////////////////////////////////////////////////////////////////
// Constants
////////////////////////////////////////////////////////////////////////////////

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

const search = document.getElementById('graph-search') as HTMLInputElement;
const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2

const zoomMax = 0.5;
const zoomMin = 4.5;

////////////////////////////////////////////////////////////////////////////////
// Globals
////////////////////////////////////////////////////////////////////////////////

let camOffset = [0, 0]
let isMouseDown = false;
let mouseZoom = 1;
let mouseSpeed = 1;
let projects: Project[] = [];

////////////////////////////////////////////////////////////////////////////////
// Event Listeners
////////////////////////////////////////////////////////////////////////////////

window.addEventListener("resize", (evt) => {
	draw();
});

canvas.addEventListener("mousedown", (evt) => {
	isMouseDown = true;

	console.log(evt.clientX, evt.clientY);
	projects.forEach(function (element: Project) {

		if (element.intersects(evt.clientX, evt.clientY)) {
			console.log("Project:", element.data.name);
			return;
		}
	});
});

canvas.addEventListener("mouseup", (evt) => {
	isMouseDown = false;
});

canvas.addEventListener("mouseout", (evt) => {
	isMouseDown = false;
});

canvas.addEventListener("mousemove", (evt) => {
	if (isMouseDown) {
		// Normalize mouse speed depending on zoom.
		camOffset[0] += ((evt.movementX * (1 / mouseZoom)) * mouseSpeed);
		camOffset[1] += ((evt.movementY * (1 / mouseZoom)) * mouseSpeed);
		draw();
	}
});

canvas.onwheel = function (evt) {
	evt.preventDefault();

	mouseZoom += evt.deltaY * -0.001;
	mouseZoom = clamp(mouseZoom, zoomMax, zoomMin);
	draw();
}

////////////////////////////////////////////////////////////////////////////////
// Main
////////////////////////////////////////////////////////////////////////////////

function draw() {
	console.log("Draw!")

	canvas.width = 1 * (window.innerWidth - 16);
	canvas.height = 1 * (window.innerHeight - headerHeight - 16);

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	ctx.scale(mouseZoom, mouseZoom);

	const pos = translatePos(0, 0, 0);

	// Draw rings

	ctx.save();
	ctx.lineWidth = 5;
	ctx.strokeStyle = Colors.LightGray;
	for (let i = 0, radius = 170; i < 6; i++, radius += 165) {
		ctx.beginPath();
		ctx.arc(pos[0], pos[1], radius, circle, 0);
		ctx.stroke();
		ctx.closePath();	
	}
	ctx.restore();

	for (const project of projects)
		project.drawlines();

	for (const project of projects)
		project.draw();
}

function initGraph() {

	// Fetch the data
	data.forEach(function (element: ProjectData) {

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

initGraph();
draw();