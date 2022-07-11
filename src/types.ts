/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   types.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:30:53 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/09 17:39:02 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const Colors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC", // #00A8C1
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
	BigProject:		66, // Difficult project.
	Project:		50, // Normal project.
	Rush:			25, // Rush project.
	Exam:			25, // Exam project.
	Piscine:		50, // Piscine project.
	Module:			28, // A modular project.
};

const ProjectStatus = {
	"done": 			{foreground: Colors.Cyan, background: Colors.Cyan, textColor: Colors.White},
	"fail": 			{foreground: Colors.Red, background: Colors.Red, textColor: Colors.White},
	"available": 		{foreground: Colors.Gray, background: Colors.White, textColor: Colors.White},
	"unavailable":		{foreground: Colors.Gray, background: Colors.LightGray, textColor: Colors.LightGray},
	"in_progress":		{foreground: Colors.Gray, background: Colors.Cyan, textColor: Colors.Cyan},
	"not_recommended":	{foreground: Colors.Gray, background: Colors.Orange, textColor: Colors.Orange},
}

interface MousePos {
	x: number;
	y: number;
}
