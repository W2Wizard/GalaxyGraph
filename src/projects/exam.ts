/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   exam.ts                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:41:13 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:41:13 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/**
 * An exam project.
 */
class Exam extends Project {
	constructor(rawProjectData: ProjectData) {
		super(rawProjectData);
		this.size = ProjectSizes.Exam;
	}

	override draw(): void {
		super.draw();
	}

	override intersects(x: number, y: number): boolean {
		return super.intersects(x, y);
	}
}