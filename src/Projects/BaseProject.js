/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Project.js                                         :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/28 23:40:37 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/06/28 23:40:37 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import {GraphColors} from '../Constants.js';

/**
 * The different states a project can be in.
 * Depending on the state the project will be displayed differently
 * with different primary and secondary colors.
 * 
 * A primary color is the inner part of the object.
 * A secondary is the outer part of the object.
 * Finally a text color for the inner text within the object.
 */
export const ProjectState = {
	Done:			{ state: "done", primaryColor: GraphColors.Cyan, secondaryColor: GraphColors.Cyan, textColor: GraphColors.White },
	InProgress:		{ state: "in_progress", primaryColor: GraphColors.Gray, secondaryColor: GraphColors.Cyan, textColor: GraphColors.Cyan },
	Available:		{ state: "available", primaryColor: GraphColors.Gray, secondaryColor: GraphColors.White, textColor: GraphColors.White },
	Unavailable:	{ state: "unavailable", primaryColor: GraphColors.Gray, secondaryColor: GraphColors.LightGray, textColor: GraphColors.Gray },
	NotRecommended:	{ state: "not_recommended", primaryColor: GraphColors.Gray, secondaryColor: GraphColors.Orange, textColor: GraphColors.Orange },
	Fail:			{ state: "fail", primaryColor: GraphColors.Red, secondaryColor: GraphColors.Red, textColor: GraphColors.White },
};

/**
 * The different project types with their radius/size.
 */
export const ProjectType = {
	SoloProject:	50, // Single user project.
	SoloBigProject:	75, // Difficult single/multi user project.
	Rush:			50, // Rush project.
	Exam:			50, // Exam project.
	Piscine:		50, // Piscine project.

	// Special projects
	ModuleBig:		30, // A big module e.g: Final module.
	ModuleSmall:	20, // A big module e.g: Final module.
};

/**
 * Abstract class for a simple project
 * 
 * @abstract
 */
export class BaseProject {

	/**
	 * Constructor for a project
	 * @constructor
	 * @param {number} x - The X position of the project.
	 * @param {number} y - The Y position of the project.
	 * @param {string} name - The display name of the project.
	 * @param {ProjectState} name - The current project state.
	 */
	constructor(x, y, name, state) {
		this.x = x;
		this.y = y;
		this.name = name;
		this.state = state;
	};

	/**
	 * Draws the project class.
	 */
	draw = function() {};
};