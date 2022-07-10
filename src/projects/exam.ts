/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   exam.ts                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:13 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 17:35:16 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * An exam project.
 */
class Exam extends SpecialProject {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Exam;
	}

	override draw(): void {
		super.draw();
		this.drawTitle();
	}

	override drawTitle(): void {
		super.drawTitle();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}