/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   piscine.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:42 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 17:40:15 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Piscine extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Piscine;
		this.fontSizeOffset = 20;
	}

	override draw(): void {

		let width = 160;
		let height = 52;
		
		ctx.save();
		ctx.lineWidth = 5;

		// Body
		ctx.beginPath();
		{
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.rect(this.data.x - width / 2, this.data.y - height / 2, width, height);
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
		return super.intersects(x, y);
	}
}