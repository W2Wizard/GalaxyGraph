/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   renderGraph.ts                                     :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/01 09:54:49 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/04 17:54:37 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

////////////////////////////////////////////////////////////////////////////////
// Constants
////////////////////////////////////////////////////////////////////////////////

const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));
const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const search = document.getElementById('graph-search') as HTMLInputElement;
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2
const camOffset = [0, 0]

let mouseDown = false;
let mouseZoom = 1;
let projects: Project[] = [];

// n > 0: ZoomIn && n < 0: Zoom out
const zoomMax = 0.5;
const zoomMin = 3.5;
const mouseSpeed = 1;

// Rendering
////////////////////////////////////////////////////////////////////////////////

/**
 * Translates the given position to the correct one.
 * @param x The x coordinate to correctly translate.
 * @param y The y coordinate to correctly translate.
 * @returns The adjusted coordinates.
 */
function translatePos(x: number, y: number, offset: number = 3000) {
	// 3000 due to 'libft' being in the middle.
	return [(((x - offset)) + camOffset[0]) + (canvas.width / 2),
			(((y - offset)) + camOffset[1]) + (canvas.height / 2)];
}

/**
 * Clamps the given number between two values.
 * @param num 
 * @param min 
 * @param max 
 * @returns The clamped value.
 */
function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

// Event Listeners
////////////////////////////////////////////////////////////////////////////////

// NOTE: https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element

search.onkeydown = (event) => {
	if (event.key === "Enter") 
	{
		console.log(search.value)
		data.forEach(function (element: ProjectData) {
			if (element.name.toLowerCase() === search.value) {
				console.log("At:", element.x, element.y)
				return;
			}
		});
	}
}

canvas.onwheel = function (evt) {
	evt.preventDefault();

	// TODO: Zoom onto mouse position
	mouseZoom += evt.deltaY * -0.001;
	mouseZoom = clamp(mouseZoom, zoomMax, zoomMin);
}

canvas.addEventListener("mousedown", function (evt) {
	mouseDown = true;
});

canvas.addEventListener("mouseup", function (evt) {
	mouseDown = false;
});

canvas.addEventListener("mouseout", function (evt) {
	mouseDown = false;
});

canvas.addEventListener("mousemove", (evt) => {
	if (mouseDown) {
		// Normalize mouse speed depending on zoom.
		camOffset[0] += ((evt.movementX * (1 / mouseZoom)) * mouseSpeed);
		camOffset[1] += ((evt.movementY * (1 / mouseZoom)) * mouseSpeed);
	}
});

// Rendering
////////////////////////////////////////////////////////////////////////////////

function draw() {
	requestAnimationFrame(draw);
	
	// Some upscaling
	canvas.width = 1.42 * (window.innerWidth - 16);
	canvas.height = 1.42 * (window.innerHeight - headerHeight - 16);
	
	ctx.scale(mouseZoom, mouseZoom);
	ctx.fillStyle = "#fff"
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
	// Draw circles
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#6F7278';
	
	const pos = translatePos(0, 0, 0);
	
	// Q: What are these values ???
	// A: I have no idea, some french guy decided this was nice.
	
	// Rank 0 (1)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 170, circle, 0);
	ctx.stroke();
	ctx.closePath();
	
	// Rank 1 (2)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 345, circle, 0);
	ctx.stroke();
	ctx.closePath();
	
	// Rank 2 (3)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 500, circle, 0);
	ctx.stroke();
	ctx.closePath();
	
	// Rank 3 (4)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 660, circle, 0);
	ctx.stroke();
	ctx.closePath();
	
	// Rank 4 (5)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 835, circle, 0);
	ctx.stroke();
	
	// Rank 5 (6)
	ctx.beginPath();
	ctx.arc(pos[0], pos[1], 995, circle, 0);
	ctx.stroke();
	ctx.closePath();
	
	ctx.strokeStyle = "#6F7278";
	ctx.lineWidth = 5;
	
	// Draw the lines
	for (const project of projects)
		project.drawlines();
	
	// Draw the projects
	for (const project of projects)
		project.draw();
}

function renderGraph() {

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
		if (element.name.toLowerCase().includes("module")) {
			newProject = new Module(element);
		}
		
		projects.push(newProject);
	});

	draw();
	
}

function myFunction() {
	camOffset[0] = 0;
	camOffset[1] = 0;
	mouseZoom = 1;
}

renderGraph();