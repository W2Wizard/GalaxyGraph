/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   render.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/12 13:35:28 by lde-la-h      #+#    #+#                 */
/*   Updated: 2023/01/11 13:52:01 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * This file is responsible for all the rendering and initial page management
 * for the galaxy graph.
 */

// Globals
/* ************************************************************************** */

/* Graph config */
let graph: IGraph = { ranks: [], projects: [] };
const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const canvasParent = canvas.parentElement as HTMLElement;
const canvas2D = new Canvas2D(canvas, canvasParent.clientWidth, canvasParent.clientHeight);

const boxDimensions = { width: 160, height: 50 };
const specialDimensions = { width: 120, height: 42 };

// Intersections
/* ************************************************************************** */

function isInsideCircle(x: number, y: number, cx: number, cy: number, rad: number) {
	return ((x - cx) * (x - cx) + (y - cy) * (y - cy)) <= rad * rad;
}

function isInsideRectangle(x: number, y: number, rx: number, ry: number, width: number, height: number,) {
	const x1 = rx - width / 2;
	const y1 = ry - height / 2;

	if (x < x1 || y < y1 || x > x1 + width || y > y1 + height)
		return false;
	return true;
}

function isPointIntersectingProject(x: number, y: number, project: IGraphRenderProject): boolean {
	switch (project.data.kind) {
		case "rush":
		case "exam":
			return isInsideRectangle(x, y, project.data.x, project.data.y, specialDimensions.width, specialDimensions.height);
		case "piscine":
			return isInsideRectangle(x, y, project.data.x, project.data.y, boxDimensions.width, boxDimensions.height);
		default:
			return isInsideCircle(x, y, project.data.x, project.data.y, ProjectSizes[project.data.kind]);
	}
}

// Render functions
/* ************************************************************************** */

/**
 * Draws a circle project on the graph.
 * @param ctx The canvas context to draw on.
 * @param project The project to draw.
 */
function drawCircleProject(ctx: CanvasRenderingContext2D, project: IGraphRenderProject) {
	ctx.save();
	const size: number = ProjectSizes[project.data.kind];
	ctx.beginPath();
	{
		ctx.lineWidth = 10;
		ctx.shadowBlur = project.selected ? 200 * Math.max(...[canvas2D.zoomAmount, 1]) : 0;
		ctx.shadowColor = ctx.strokeStyle = project.renderState.background;
		ctx.fillStyle = project.renderState.foreground;
		ctx.arc(project.data.x, project.data.y, size, Math.PI * 2, 0);
		ctx.stroke();
		ctx.fill();
	}
	ctx.closePath();
	ctx.restore()
}

/**
 * Draws a boxed with hard corners project on the graph.
 * @param ctx The canvas context to draw on.
 * @param project The project to draw.
 */
function drawBoxProject(ctx: CanvasRenderingContext2D, project: IGraphRenderProject) {
	ctx.save();
	ctx.lineWidth = 4;
	ctx.beginPath();
	{
		ctx.shadowBlur = project.selected ? 200 * Math.max(...[canvas2D.zoomAmount, 1]) : 0;
		ctx.shadowColor = ctx.strokeStyle = project.renderState.background;
		ctx.fillStyle = project.renderState.foreground;
		ctx.rect(project.data.x - boxDimensions.width / 2,
				project.data.y - boxDimensions.height / 2,
				boxDimensions.width, boxDimensions.height);
		ctx.fill();
		ctx.stroke();
	}
	ctx.closePath();
	ctx.restore();
}

/**
 * Draws a boxed with rounded corners project on the graph.
 * @param ctx The canvas context to draw on.
 * @param project The project to draw.
 */
function drawSpecialProject(ctx: CanvasRenderingContext2D, project: IGraphRenderProject) {
	const x: number = project.data.x - specialDimensions.width / 2;
	const y: number = project.data.y - specialDimensions.height / 2;
	const width: number = specialDimensions.width;
	const height: number = specialDimensions.height;
	let radius: number = ProjectSizes[project.data.kind];

	if (width < 2 * radius) radius = width / 2;
	if (height < 2 * radius) radius = height / 2;

	ctx.save()
	ctx.lineWidth = 10;
	ctx.beginPath();
	{
		ctx.shadowBlur = project.selected ? 200 * Math.max(...[canvas2D.zoomAmount, 1]) : 0;
		ctx.shadowColor = ctx.strokeStyle = project.renderState.background;
		ctx.fillStyle = project.renderState.foreground;
		ctx.moveTo(x + radius, y);
		ctx.arcTo(x + width, y, x + width, y + height, radius);
		ctx.arcTo(x + width, y + height, x, y + height, radius);
		ctx.arcTo(x, y + height, x, y, radius);
		ctx.arcTo(x, y, x + width, y, radius);
		ctx.stroke();
		ctx.fill()
	}
	ctx.closePath();
	ctx.restore();
}

/**
 * Calculates the text size and position for a project.
 * 
 * TODO: Fine tune this function, currently works well with small-medium text but starts to look bad with large text.
 * 
 * @param ctx The canvas context to draw on.
 * @param project The project to draw.
 */
function calculateText(ctx: CanvasRenderingContext2D, project: IGraphRenderProject) {
	let fontSize: number = 20;
	let width = ProjectSizes[project.data.kind] * 2;
	const textPadding: number = 7;

	// Overwrite width for special cases
	switch (project.data.kind) {
		case "rush":
		case "exam":
			width = specialDimensions.width;
			break;
		case "piscine":
			width = boxDimensions.width;
			break;
	}

	while (fontSize > 0) { // Make sure font size cannot be 0 or negative
		ctx.font = `bold ${fontSize}px Roboto`;
		const bounds = ctx.measureText(project.data.name);

		if (width > bounds.width + textPadding)
			break;
		fontSize--;
	}
}

/**
 * Draws the name of a project on the graph, respecting the actual width so
 * that it doesn't overflow like on the old graph.
 * 
 * @param ctx The canvas context to draw on.
 * @param project The project to draw.
 */
function drawProjectName(ctx: CanvasRenderingContext2D, project: IGraphRenderProject) {
	ctx.save();
	ctx.beginPath();
	{
		calculateText(ctx, project);
		ctx.textAlign = 'center';
		ctx.fillStyle = project.renderState.textColor;
		ctx.fillText(project.data.name, project.data.x, project.data.y + 5);
		ctx.fill();
	}
	ctx.closePath();
	ctx.restore();
}

/**
 * Draws the projects on the graph.
 * @param ctx The canvas context to draw on.
 */
function drawProjects(ctx: CanvasRenderingContext2D, graph: IGraph) {
	ctx.save();
	for (const project of graph.projects) {
		project.render(ctx, project);
		drawProjectName(ctx, project);
	}
	ctx.restore();
}

/**
 * Draws the lines between projects.
 * @param ctx The canvas context to draw on.
 * 
 * @note For any 42 Intra staff, please do not store lines like this in the future.
 * Its god awful and whoever did this should be ashamed of themselves. Also Ruby on rails sucks.
 */
function drawProjectLines(ctx: CanvasRenderingContext2D, graph: IGraph) {
	ctx.save();
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	for (const project of graph.projects) {
		for (const line of project.data.lines) {
			ctx.beginPath();
			{
				ctx.strokeStyle = project.renderState.background;
				ctx.moveTo(line.source.x, line.source.y);
				ctx.lineTo(line.target.x, line.target.y);
				ctx.stroke();
			}
			ctx.closePath();
		}
	}
	ctx.restore();
}

/**
 * Draws the core ranks of the graph.
 * @param ctx The canvas context to draw on.
 */
function drawCoreRanks(ctx: CanvasRenderingContext2D, graph: IGraph) {
	ctx.save();
	for (let i = 0, radius = 170; i < graph.ranks.length; i++, radius += 165) {
		const state = RankRenderStates[graph.ranks[i]];

		ctx.beginPath();
		{
			ctx.strokeStyle = state.color
			ctx.lineWidth = state.width;
			ctx.arc(0, 0, radius, Math.PI * 2, 0);
			ctx.stroke();
		}
		ctx.closePath();
	}
	ctx.restore();
}

// Graph initilization
/* ************************************************************************** */

function getRenderFunction(project: IGraphProject): (ctx: CanvasRenderingContext2D, project: IGraphRenderProject) => void {
	switch (project.kind) {
		case "rush":
		case "exam":
			return drawSpecialProject;
		case "piscine":
			return drawBoxProject;
		default:
			return drawCircleProject;
	}
}

/** Initializes the graph, fetches content and then starts rendering the data */
function initGraph(graphData: any) {
	graph = { ranks: graphData.ranks, projects: [] };

	for (const child of projectDatalist.children)
		child.remove();

	// TODO: Clear datalist.

	graphData.projects.forEach(element => {
		let project: IGraphProject = element;

		// Add to renderque
		graph.projects.push({
			data: project,
			selected: false,
			renderState: ProjectRenderStates[project.state],
			render: getRenderFunction(project),
		});
	
		// Add to datalist.
		let option = document.createElement('option');
		option.value = project.name;
		projectDatalist.appendChild(option);
	});

	canvas2D.render((ctx) => {
		drawProjectLines(ctx, graph);
		if (graph.ranks.length > 0)
			drawCoreRanks(ctx, graph);
		drawProjects(ctx, graph);
	});
}

// Window listeners.
/* ************************************************************************** */

// window.addEventListener("load", () => {
// 	window.top.postMessage()

// 	// TODO: Fetch from IIntra.
// 	initGraph({
// 		ranks: ["done", "done", "in_progress", "unavailable"],
// 		projects: APIData
// 	});
// });

window.addEventListener("resize", () => {
	// TODO: Leave in as option ?
	// canvas2D.setViewPosition({ x: 0, y: 0 });
	canvas2D.setDimensions(canvasParent.clientWidth, canvasParent.clientHeight);
});

canvas2D.canvas.addEventListener("mousemove", (e) => {
	const mousePos = canvas2D.getTransformedPoint({ x: e.clientX, y: e.clientY });
	for (const project of graph.projects) {
		if (isPointIntersectingProject(mousePos.x, mousePos.y, project)) {
			canvas2D.canvas.classList.add("pointercursor");
			return;
		}
	}
	canvas2D.canvas.classList.remove("pointercursor");
});

canvas2D.canvas.addEventListener("mouseup", (e) => {
	let selectedProject: IGraphRenderProject | null = null;
	const mousePos = canvas2D.getTransformedPoint({ x: e.clientX, y: e.clientY });

	for (const project of graph.projects) {
		project.selected = false;
		if (isPointIntersectingProject(mousePos.x, mousePos.y, project)) {
			selectedProject = project;
			project.selected = true;
		}
	}

	const widget = document.getElementById("graph_description") as HTMLDivElement;
	if (selectedProject == null)
		return widget.classList.remove("active");
	widget.classList.add("active");

	const header = document.getElementById("header") as HTMLDivElement;
	const time = document.getElementById("time") as HTMLDivElement;
	const description = document.getElementById("description") as HTMLDivElement;
	const requirements = document.getElementById("requirements") as HTMLDivElement;

	const Anchor = header.children[0] as HTMLAnchorElement;
	const Span = header.children[1] as HTMLSpanElement;

	// Set anchor link
	Anchor.innerText = selectedProject.data.name;
	Anchor.setAttribute("href", selectedProject.data.url);

	// Set project name & state
	Span.innerText = selectedProject.renderState.displayText;
	Span.setAttribute("data-project-state", selectedProject.data.state);

	time.innerText = selectedProject.data.duration;
	description.innerText = selectedProject.data.description;
	requirements.innerText = selectedProject.data.requirements;
});
