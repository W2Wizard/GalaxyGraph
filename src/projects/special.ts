/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   special.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:24 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/14 09:10:35 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * A special project such as a Rush, Exam, ...
 * Are rendered as rounded rectangles.
 */
 class SpecialProject extends Project {

	width: number = 128;
	height: number = 48;
	x: number;
	y: number;

	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.x = this.data.x - this.width / 2;
		this.y = this.data.y - this.height / 2;
		this.fontOffset = 75;
	}

	override draw(): void {

		let radius = 16;
		if (this.width < 2 * radius) radius = this.width / 2;
		if (this.height < 2 * radius) radius = this.height / 2;

		ctx.beginPath();
		{
			ctx.shadowBlur = this.selected ? 180 : 0;
			ctx.shadowColor = this.state.background;
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.moveTo(this.x + radius, this.y);
			ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, radius);
			ctx.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, radius);
			ctx.arcTo(this.x, this.y + this.height, this.x, this.y, radius);
			ctx.arcTo(this.x, this.y, this.x + this.width, this.y, radius);
			ctx.stroke();
			ctx.fill()
		}
		ctx.closePath();
	}

	override drawTitle(): void {
		super.drawTitle();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}