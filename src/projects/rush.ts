/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   module.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:24 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:41:24 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * A rush project.
 */
class Rush extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Rush;
	}

	override draw(): void {

		const width = 128;
		const height = 48;
		const borderThiccness = 25;
		
		let x = this.data.x - width / 2;
		let y = this.data.y - height / 2;

		let radius = 16;
		if (width < 2 * radius) radius = width / 2;
		if (height < 2 * radius) radius = height / 2;

		ctx.save();
		ctx.beginPath();
		{
			ctx.lineWidth = borderThiccness;
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

		ctx.beginPath();
		{
			ctx.textAlign = 'center';
			ctx.fillStyle = this.state.textColor;
			ctx.font = `normal bold ${this.fontSize}px Segoe UI`;
			ctx.fillText(this.data.name, this.data.x, this.data.y + (this.fontSize / 2.0));
			ctx.fill();
		}
		ctx.closePath();
		ctx.restore();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}