/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   render.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/12 13:35:28 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/12/12 13:35:45 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

/* Graph config */
const canvasScale = isFirefox ? 1 : 2; // The upscaling of the canvas, higher is more resolution.
const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const canvasParent = canvas.parentElement as HTMLElement;
console.log(canvasParent.clientWidth, canvasParent.clientHeight)
const canvas2D = new Canvas2D(canvas, canvasParent.clientWidth, canvasParent.clientHeight);

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
		ctx.shadowBlur = project.selected ? 180 : 0;
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
	const width: number = 160;
	const height: number = 52;

	ctx.save();
	ctx.lineWidth = 5;
	ctx.beginPath();
	{
		ctx.shadowBlur = project.selected ? 180 : 0;
		ctx.shadowColor = ctx.strokeStyle = project.renderState.background;
		ctx.fillStyle = project.renderState.foreground;
		ctx.rect(project.data.x, project.data.y, width, height);
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
	const width: number = 128;
	const height: number = 48;
	const x: number = project.data.x;
	const y: number = project.data.y;
	let radius: number = ProjectSizes[project.data.kind];

	if (width < 2 * radius) radius = width / 2;
	if (height < 2 * radius) radius = height / 2;

	ctx.save()
	ctx.beginPath();
	{
		ctx.shadowBlur = project.selected ? 180 : 0;
		ctx.shadowColor = ctx.strokeStyle = project.renderState.background;
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

/* ************************************************************************** */

/** Fetches the graph data that is supposed to be rendered */
function fetchGraph(): IGraph {
	return { name: "42", projects: [], ranks: ["done", "done", "in_progress", "unavailable"] }
}

/**
 * Draws the projects on the graph.
 * @param ctx The canvas context to draw on.
 */
function drawProjects(ctx: CanvasRenderingContext2D, graph: IGraph) {
	ctx.save();
	for (const project of graph.projects)
		project.render(ctx, project);
	ctx.restore();
}

/**
 * Draws the lines between projects.
 * @param ctx The canvas context to draw on.
 */
function drawProjectLines(ctx: CanvasRenderingContext2D, graph: IGraph) {
	ctx.save();
	ctx.lineWidth = 11;
	ctx.lineCap = 'round';

	// NOTE: For any 42 Intra staff, please do not store lines like this in the future.
	for (const project of graph.projects) {
		for (const line of project.data.lines) {
			ctx.beginPath();
			ctx.strokeStyle = project.renderState.foreground;
			ctx.moveTo(line.source.x, line.source.y);
			ctx.lineTo(line.target.x, line.target.y);
			ctx.stroke();
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
		ctx.strokeStyle = state.color
		ctx.lineWidth = state.width;
		ctx.arc(0, 0, radius, Math.PI * 2, 0);
		ctx.stroke();
		ctx.closePath();
	}
	ctx.restore();
}

/* ************************************************************************** */

/** Initializes the graph, fetches content and then starts rendering the data */
function initGraph() {
	const graph: IGraph = fetchGraph();

	// Assign correct render function to projects.
	for (const project of graph.projects) {
		project.selected = false;
		project.renderState = ProjectRenderStates[project.data.state];

		// HACK: Since IntraAPI V2 does not specifiy this kind ...
		const name = project.data.name.toLowerCase();
		if (name.includes("module") && !name.includes("old-cpp")) {
			project.data.kind = "module";
			
			// Nor does it have a kind for a final module ...
			if (name.endsWith("08"))
				project.data.kind = "final_module";
			continue;
		}

		switch (project.data.kind) {
			// Big projects
			case "part_time":
			case "big_project":
			case "first_internship":
			case "second_internship":
			case "project": {
				project.render = drawCircleProject;
				break;
			}

			// Special projects
			case "rush":
			case "exam": {
				project.render = drawSpecialProject;
				break;
			}
			
			// Piscines
			case "piscine": {
				project.render = drawBoxProject;
				break;
			}
		}
	}

	canvas2D.render((ctx) => {
		// NOTE: Because 42 loves hardcoding ...
		if (graph.ranks.length > 0)
			drawCoreRanks(ctx, graph);
		drawProjectLines(ctx, graph);
		drawProjects(ctx, graph);
	});
}

window.addEventListener("resize", () => {
	console.log("Resize!");
	canvas2D.setViewPosition({x: 0, y: 0});
	canvas2D.setDimensions(canvasParent.clientWidth, canvasParent.clientHeight);
});

window.addEventListener("load", initGraph);
