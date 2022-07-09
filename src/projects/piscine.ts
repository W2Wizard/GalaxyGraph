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
	}

	override draw(): void {

		let width = 160;
		let height = 64;

		ctx.save();
		ctx.beginPath(); // Object
		{
			ctx.lineWidth = 7
			ctx.strokeStyle = this.state.background;
			ctx.fillStyle = this.state.foreground;
			ctx.rect(this.data.x - width / 2, this.data.y - height / 2, width, height);
			ctx.fill();
			ctx.stroke();
		}
		ctx.closePath();

		ctx.beginPath(); // Text
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