/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   special.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:24 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 17:36:20 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * A special project such as a Rush, Exam, ...
 * Are rendered as rounded rectangles.
 */
 class SpecialProject extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.fontSizeOffset = 75
	}

	override draw(): void {

		const width = 128;
		const height = 48;
		
		const x = this.data.x - width / 2;
		const y = this.data.y - height / 2;

		let radius = 16;
		if (width < 2 * radius) radius = width / 2;
		if (height < 2 * radius) radius = height / 2;

		ctx.beginPath();
		{
			ctx.shadowBlur = this.selected ? 180 : 0;
			ctx.shadowColor = this.state.background;
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.moveTo(x + radius, y);
			ctx.arcTo(x + width, y, x + width, y + height, radius);
			ctx.arcTo(x + width, y + height, x, y + height, radius);
			ctx.arcTo(x, y + height, x, y, radius);
			ctx.arcTo(x, y, x + width, y, radius);
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