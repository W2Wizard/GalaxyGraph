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

// Project
////////////////////////////////////////////////////////////////////////////////

class Project {

	size: number;
	lines: any[] = [];
	data: ProjectData;

	constructor(rawProjectData: ProjectData) {
		this.data = rawProjectData;
		this.size = ProjectSizes.Project;

		for (let i = 0; i < this.data.by.length; i++) {
			const points = this.data.by[i].points;
			this.lines.push({origin: points[0], target: points[1], color: Colors.LightGray});
		}
	}

	/**
	 * Draw the project's lines.
	 */
	drawlines(): void {
		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];

			const from = translatePos(line.origin[0], line.origin[1]);
			const to = translatePos(line.target[0], line.target[1]);

			ctx.save();
			ctx.lineWidth = 7;
			ctx.strokeStyle = line.color;
			ctx.lineCap = "square";
			ctx.beginPath();
				ctx.moveTo(from[0], from[1]);
				ctx.lineTo(to[0], to[1]);
			ctx.closePath()
			ctx.stroke();
			ctx.restore();
		}
	}

	/**
	 * Draw the project itself.
	 */
	draw(): void {
		
		const backgroundScale = 3;
		const foregroundScale = backgroundScale - 0.2;
		const pos = translatePos(this.data.x, this.data.y);

		// Background
		ctx.beginPath();
			ctx.fillStyle = Colors.LightGray;
			ctx.arc(pos[0], pos[1], this.size * backgroundScale, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = Colors.Gray;
			ctx.arc(pos[0], pos[1], this.size * foregroundScale, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Name
		ctx.beginPath();
			// TODO: Scale the text based on its length and sphere this.size
			ctx.font = `normal bold ${this.size - this.data.name.length * 0.42}px Arial`;
			ctx.fillStyle = Colors.LightGray;
			ctx.textAlign = 'center';
			ctx.fillText(this.data.name, pos[0], pos[1] + this.size / foregroundScale);
			ctx.fill();
		ctx.closePath();
	}

	intersects(x: number, y: number): boolean {
		const pos = translatePos(this.data.x, this.data.y);

		return (isInsideCircle(x, y, pos[0], pos[1], this.size * 3));
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
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
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
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}

class Piscine extends Project 
{
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Piscine;
	}

	override draw(): void {
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
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
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}