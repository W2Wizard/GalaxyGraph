/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   types.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:30:53 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:30:53 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const Colors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC",
	Gray:		"#46484C",
	LightGray:	"#6F7278",
	Orange:		"#FFA300",
};

interface By {
	parent_id: number;
	points: number[][];
}

type ProjectData = {
	state: string;
	final_mark?: number;
	id: number;
	kind: string;
	name: string;
	x: number;
	y: number;
	by: By[];
	project_id: number;
	difficulty: number;
	duration: string;
	rules: string;
	description: string;
	slug: string;
}

const ProjectSizes = {
	BigProject:		75, // Difficult project.
	Project:		50, // Normal project.
	Rush:			50, // Rush project.
	Exam:			25, // Exam project.
	Piscine:		50, // Piscine project.
	Module:			20, // A modular project.
};