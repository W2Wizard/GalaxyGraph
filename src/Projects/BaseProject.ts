/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   BaseProject.ts                                     :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/28 23:40:37 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/06/30 14:26:15 by lde-la-h      ########   odam.nl         */
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
	"done":				{ primaryColor: GraphColors.Cyan, secondaryColor: GraphColors.Cyan, textColor: GraphColors.White },
	"in_progress":		{ primaryColor: GraphColors.Gray, secondaryColor: GraphColors.Cyan, textColor: GraphColors.Cyan },
	"available":		{ primaryColor: GraphColors.Gray, secondaryColor: GraphColors.White, textColor: GraphColors.White },
	"unavailable":		{ primaryColor: GraphColors.Gray, secondaryColor: GraphColors.LightGray, textColor: GraphColors.Gray },
	"not_recommended":	{ primaryColor: GraphColors.Gray, secondaryColor: GraphColors.Orange, textColor: GraphColors.Orange },
	"fail":				{ primaryColor: GraphColors.Red, secondaryColor: GraphColors.Red, textColor: GraphColors.White },
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
	ModuleSmall:	20, // A small module
};

/**
 * 
 */
interface Lines {
	parent_id: number;
	points: number[][];
}

/**
 * A Intra V2 Project model.
 */
interface ProjectData {
	state: string;
	final_mark?: number;
	id: number;
	kind: string;
	name: string;
	x: number;
	y: number;
	by: Lines[];
	project_id: number;
	difficulty: number;
	duration: string;
	rules: string;
	description: string;
	slug: string;
}
/**
 * Abstract class for a simple project
 * 
 * @abstract
 */
export class BaseProject {

	// Variables
	data: ProjectData;

	// Constructor
	constructor(project: string) {
		this.data = JSON.parse(project)
	};

	/**
	 * Draws the project class.
	 */
	draw = function() {};
};