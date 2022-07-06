/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   rush.ts                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:58 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:41:58 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * A module project
 */
class Module extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Module;
	}

	override draw(): void {
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}