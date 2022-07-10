/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   rush.ts                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:24 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 17:38:40 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * A rush project.
 */
class Rush extends SpecialProject {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Rush;
	}

	override draw(): void {
		super.draw();
	}

	override drawTitle(): void {
		super.drawTitle();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}