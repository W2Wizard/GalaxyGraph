/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   project.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:31:17 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 15:20:22 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Project {

	size: number;
	lines: any[] = [];
	data: ProjectData;
	state: any;
	fontSize: number;
	selected: boolean;
	firstDraw: boolean = true;

	constructor(rawProjectData: ProjectData) {
		this.data = rawProjectData;
		this.size = ProjectSizes.Project;

		for (let i = 0; i < this.data.by.length; i++) {
			const points = this.data.by[i].points;
			this.lines.push({ origin: points[0], target: points[1], color: Colors.LightGray });
		}

		this.state = ProjectStatus[this.data.state];
		this.fontSize = 18
	}

	/**
	 * Draw the project's lines.
	 */
	drawlines(): void {

		ctx.lineCap = "round";
		for (let i = 0; i < this.lines.length; i++) {
			const line = this.lines[i];

			ctx.beginPath();
			{
				ctx.lineWidth = 10;
				ctx.strokeStyle = line.color;
				ctx.moveTo(line.origin[0], line.origin[1]);
				ctx.lineTo(line.target[0], line.target[1]);
				ctx.stroke();
			}
			ctx.closePath();
		}
	}

	/**
	 * Draw the project itself.
	 */
	draw(): void {
		// Background
		ctx.save();
		ctx.beginPath();
		{
			ctx.shadowBlur = this.selected ? 180 : 0;
			ctx.shadowColor = this.state.background;
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.arc(this.data.x, this.data.y, this.size, Math.PI * 2, 0);
			ctx.stroke();
			ctx.fill();
		}
		ctx.closePath();

		// Title
		// TODO: Make this a override function.
		ctx.beginPath();
		{
			this.setFontProperties(this.firstDraw)
			ctx.fillText(this.data.name, this.data.x, this.data.y + (this.fontSize / 2.0));
			ctx.fill();
		}
		ctx.closePath();
		ctx.restore();

		this.firstDraw = false
	}

	intersects(x: number, y: number): boolean {
		return isInsideCircle(x, y, this.data.x, this.data.y, this.size);
	}

	onClick(): void {
		this.selected = true;
		return;
	}

	///////////////////////////////////////////////////////////////////////////

	setFontProperties(calculateFontSize: boolean) {
		ctx.textAlign = 'center';
		ctx.fillStyle = this.state.textColor;
		
		if (!calculateFontSize) {
			this.setCurrentFont();
			return;
		}
		
		const circleWidth = this.size * 2;
		
		for (;;) {
			this.setCurrentFont()
			const bounds = ctx.measureText(this.data.name);

			if (circleWidth > bounds.width) {
				this.fontSize -= 1;
				break;
			}
			this.fontSize--;
		}

		this.setCurrentFont();
	}

	setCurrentFont() {
		ctx.font = `normal bold ${this.fontSize}px Segoe UI`;
	}
}
