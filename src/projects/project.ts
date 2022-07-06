/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   project.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:31:17 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 14:05:37 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Project {

	size: number;
	lines: any[] = [];
	data: ProjectData;
	state: any;
	fontSize: number;

	constructor(rawProjectData: ProjectData) {
		this.data = rawProjectData;
		this.size = ProjectSizes.Project;

		for (let i = 0; i < this.data.by.length; i++) {
			const points = this.data.by[i].points;
			this.lines.push({origin: points[0], target: points[1], color: Colors.LightGray});
		}

		this.state = ProjectStatus[this.data.state];
		
		// TODO: Limit upper bound based on character count.
		this.fontSize = (this.size / this.data.name.length) * 2;
		this.fontSize = clamp(this.fontSize, 10, 22);
	}

	/**
	 * Draw the project's lines.
	 */
	drawlines(): void {

		ctx.save();
		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];
			
			ctx.save();
			ctx.beginPath();
				ctx.lineWidth = 10;
				ctx.strokeStyle = line.color;
				ctx.moveTo(line.origin[0], line.origin[1]);
				ctx.lineTo(line.target[0], line.target[1]);
			ctx.closePath()
			ctx.stroke();
			ctx.restore();
		}
		ctx.restore();
	}

	/**
	 * Draw the project itself.
	 */
	draw(): void {

		// Background
		ctx.beginPath();
			ctx.fillStyle = this.state.background;
			ctx.arc(this.data.x, this.data.y, this.size, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Foreground
		ctx.beginPath();
			ctx.fillStyle = this.state.foreground;
			ctx.arc(this.data.x, this.data.y, this.size * 0.9, Math.PI * 2, 0);
			ctx.fill();
		ctx.closePath();

		// Title
		// TODO: Scale the text based on its length and sphere this.size
		ctx.beginPath();

			ctx.font = `normal bold ${this.fontSize}px Segoe UI`;
			ctx.textAlign = 'center';
			ctx.fillStyle = this.state.textColor;
			ctx.fillText(this.data.name, this.data.x, this.data.y + 4.5);
			ctx.fill();
		ctx.closePath();
	}

	intersects(x: number, y: number): boolean {
		return isInsideCircle(x, y, this.data.x, this.data.y, this.size);
	}
}
