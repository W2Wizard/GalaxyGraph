/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   Constants.ts                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/04 15:31:40 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/07/04 15:35:26 by lde-la-h      ########   odam.nl         */
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
	BigProject:		25, // Difficult project.
	Project:		20, // Normal project.
	Rush:			15, // Rush project.
	Exam:			15, // Exam project.
	Piscine:		15, // Piscine project.
	Module:			11, // A modular project.
};