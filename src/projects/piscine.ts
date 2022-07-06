/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   piscine.ts                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:42 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:41:42 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

class Piscine extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Piscine;
	}

	override draw(): void {
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}