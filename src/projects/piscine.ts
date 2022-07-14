/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   piscine.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:42 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/14 09:13:25 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Piscine extends Project {
	width: number = 160;
	height: number = 52;
	x: number;
	y: number;

	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Piscine;
		this.x = this.data.x - this.width / 2;
		this.y = this.data.y - this.height / 2;
		this.fontOffset = 20;
	}

	override draw(): void {
		
		ctx.save();
		ctx.lineWidth = 5;

		// Body
		ctx.beginPath();
		{
			ctx.shadowBlur = this.selected ? 180 : 0;
			ctx.shadowColor = ctx.strokeStyle = this.state.background;
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fill();
			ctx.stroke();
		}
		ctx.closePath();
		ctx.restore();

		// Name
		this.drawTitle();
	}

	override drawTitle(): void {
		super.drawTitle();
	}

	override intersects(x: number, y: number): boolean {
		return isInsideRectangle(x, y, this.data.x, this.data.y, this.width, this.height);
	}
}