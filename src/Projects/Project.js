/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Project.js                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/28 23:52:41 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/06/28 23:52:41 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import {BaseProject, ProjectState, ProjectType} from './BaseProject.js';

class Project extends BaseProject {
	constructor(x, y, name, state) { super(x, y, name, state); };

	draw = function () {
		super.draw();
	};
};
