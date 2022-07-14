/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   project.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:31:17 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/14 09:15:10 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Project {

	size: number;				// Size of the project
	lines: any[] = [];			// The project's lines
	data: ProjectData;			// The API data of the project
	state: any;					// The current project state.
	selected: boolean;			// Is the project selected ?
	firstDraw: boolean = true;	// Did we already draw the font.
	fontOffset: number;			// Offset the size of the font, bigger value, bigger font.
	fontSize: number;			// Default starting size of the font.

	constructor(rawProjectData: ProjectData) {
		this.data = rawProjectData;
		this.size = ProjectSizes.Project;
		this.fontSize = 20
		this.fontOffset = -10;
		this.state = ProjectStatus[this.data.state];

		for (let i = 0; i < this.data.by.length; i++) {
			const points = this.data.by[i].points;
			this.lines.push({ origin: points[0], target: points[1]});
		}
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
				ctx.strokeStyle = this.state.background;
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
		ctx.beginPath();
		{
			ctx.shadowBlur = this.selected ? 180 : 0;
			ctx.shadowColor = ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.arc(this.data.x, this.data.y, this.size, Math.PI * 2, 0);
			ctx.stroke();
			ctx.fill();
			ctx.shadowBlur = 0;
		}
		ctx.closePath();

		this.drawTitle();
	}

	drawTitle(): void {
		ctx.beginPath();
		{
			this.setFontProperties(this.firstDraw)
			
			// NOTE: Slight offset up to make it look more centric
			ctx.fillText(this.data.name, this.data.x, this.data.y + (this.fontSize / 2.0) - 2);
			ctx.fill();
		}
		ctx.closePath();
		this.firstDraw = false
	}

	onClick(): void {
		return;
	}

	intersects(x: number, y: number): boolean {
		return isInsideCircle(x, y, this.data.x, this.data.y, this.size);
	}

	///////////////////////////////////////////////////////////////////////////

	setCurrentFont() {
		ctx.font = `normal bold ${this.fontSize}px Roboto`;
	}

	setFontProperties(calculateFontSize: boolean) {
		ctx.textAlign = 'center';
		ctx.fillStyle = this.state.textColor;
		
		if (!calculateFontSize) {
			this.setCurrentFont();
			return;
		}
		
		const width = this.size * 2;
		
		for (;;) {
			this.setCurrentFont()
			
			const bounds = ctx.measureText(this.data.name);
			if (width > bounds.width - this.fontOffset)
				break;

			this.fontSize--;
		}
		this.setCurrentFont();
	}
}
