/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   projects.ts                                        :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/01 10:54:48 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/04 17:58:05 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

interface By {
	parent_id: number;
	points: number[][];
}

type ProjectData = {
	state: string;
	final_mark?: number;
	id: number;
	kind: string;
	name: string;
	x: number;
	y: number;
	by: By[];
	project_id: number;
	difficulty: number;
	duration: string;
	rules: string;
	description: string;
	slug: string;
}

const GraphColors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC",
	Gray:		"#46484C",
	LightGray:	"#6F7278",
	Orange:		"#FFA300",
};

const ProjectSizes = {
	BigProject:		25, // Difficult project.
	Project:		20, // Normal project.
	Rush:			15, // Rush project.
	Exam:			15, // Exam project.
	Piscine:		15, // Piscine project.
	Module:			11, // A modular project.
};

// Project
////////////////////////////////////////////////////////////////////////////////

/**
 * A simple project.
 * 
 * 			
			const from = translatePos(line.points[0][0], line.points[0][1]);
			const to = translatePos(line.points[1][0], line.points[1][1]);
 */
class Project {

	size: number;
	data: ProjectData;
	element: Element2D;
	lines: Line[] = [];
	path: Path2D;

	constructor(rawProjectData: ProjectData) {
		this.data = rawProjectData;
		this.size = ProjectSizes.Project;

		this.path = new Path2D();

		for (let i = 0; i < this.data.by.length; i++) {
			const lineDraw = this.data.by[i];
			this.lines.push(new Line(lineDraw.points[0], lineDraw.points[1], 5, Colors.LightGray));
		}
	}

	/**
	 * Draw the project's lines.
	 */
	drawlines(): void {
		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];

			const from = translatePos(line.pos[0], line.pos[1]);
			const to = translatePos(line.target[0], line.target[1]);

			ctx.lineWidth = 2;
			ctx.strokeStyle = Colors.Orange;
			ctx.beginPath();
			this.path.moveTo(from[0], from[1]);
			this.path.lineTo(to[0], to[1]);
			ctx.closePath()
			ctx.stroke(this.path);
		}

		/*
		*/
	}

	/**
	 * Draw the project itself.
	 */
	draw(): void {
		const backgroundScale = 3;
		const foregroundScale = backgroundScale - 0.2;
		const pos = translatePos(this.data.x, this.data.y)

		// Background
		ctx.beginPath()
			ctx.fillStyle = "#6F7278"
			ctx.arc(pos[0], pos[1], this.size * backgroundScale, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath()
			ctx.fillStyle = "#46484C"
			ctx.arc(pos[0], pos[1], this.size * foregroundScale, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Name
		ctx.beginPath()
			// TODO: Scale the text based on its length and sphere this.size
			ctx.font = `normal bold ${this.size - this.data.name.length * 0.42}px Arial`;
			ctx.fillStyle = "#6F7278"
			ctx.textAlign = 'center';
			ctx.fillText(this.data.name, pos[0], pos[1] + this.size / foregroundScale);
			ctx.fill();
		ctx.closePath();
	}
}

/**
 * An exam project.
 */
class Exam extends Project 
{
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Exam;
	}

	override draw(): void {

		const border = 4;
		const dim = [128, 64]
		const pos = translatePos(this.data.x, this.data.y)

		// Background
		ctx.beginPath();
			ctx.fillStyle = "#6F7278";
			ctx.fillRect(pos[0], pos[1], dim[0], dim[1]);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = "#46484C";
			ctx.fillRect(pos[0] + border, pos[1] + border, dim[0] - border * 2, dim[1] - border * 2);
			ctx.fill();
		ctx.closePath();

		ctx.beginPath(); 
			ctx.font = `normal bold ${this.size}px Arial`;
			ctx.fillStyle = "#6F7278"
			ctx.textAlign = 'center';
			ctx.fillText(this.data.name, pos[0], pos[1] + this.size);
			ctx.fill();
		ctx.closePath();
	}
}

/**
 * A rush project.
 */
class Rush extends Project 
{
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Rush;
	}

	override draw(): void {
		const pos = translatePos(this.data.x, this.data.y)

		// Background
		ctx.beginPath();
			ctx.fillStyle = "#6F7278";
			ctx.fillRect(pos[0], pos[1], 64, 32);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = "#46484C";
			ctx.fillRect(pos[0], pos[1], 64, 32);
			ctx.fill();
		ctx.closePath();
	}
}

/**
 * A Piscine project
 */
class Piscine extends Project 
{
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Piscine;
	}

	override draw(): void {
		const pos = translatePos(this.data.x, this.data.y)

		// Background
		ctx.beginPath();
			ctx.fillStyle = "#6F7278";
			ctx.fillRect(pos[0], pos[1], 64, 32);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = "#46484C";
			ctx.fillRect(pos[0], pos[1], 64, 32);
			ctx.fill();
		ctx.closePath();
	}
}

/**
 * A module project
 */
class Module extends Project 
{
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Module;
	}

	override draw(): void {
		super.draw(); // Nothing special, just smaller.
	}
}