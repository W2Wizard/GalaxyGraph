/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   project.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:31:17 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:31:17 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

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

		ctx.save();
		ctx.lineWidth = 7;
		ctx.lineCap = "square";

		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];
			
			ctx.strokeStyle = line.color;
			ctx.beginPath();
				ctx.moveTo(line.origin[0], line.origin[1]);
				ctx.lineTo(line.target[0], line.target[1]);
			ctx.closePath()
			ctx.stroke();
		}
		ctx.restore();
	}

	/**
	 * Draw the project itself.
	 */
	draw(): void {

		// Background
		ctx.beginPath();
			ctx.fillStyle = Colors.LightGray;
			ctx.arc(this.data.x, this.data.y, this.size, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = Colors.Gray;
			ctx.arc(this.data.x, this.data.y, this.size * 0.9, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Title
		// TODO: Scale the text based on its length and sphere this.size
		ctx.beginPath();
			ctx.font = `normal bold ${15}px Arial`;
			ctx.fillStyle = Colors.LightGray;
			ctx.textAlign = 'center';
			ctx.fillText(this.data.name, this.data.x, this.data.y);
			ctx.fill();
		ctx.closePath();
	}

	intersects(x: number, y: number): boolean {
		return isInsideCircle(x, y, this.data.x, this.data.y, this.size);
	}
}
