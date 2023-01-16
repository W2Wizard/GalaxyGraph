/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   types.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/12 13:31:56 by lde-la-h      #+#    #+#                 */
/*   Updated: 2023/01/11 14:15:26 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/** The state of a rank. */
type TRankState = "done" | "in_progress" | "unavailable";

/** The state of a project. */
type TProjectState = "done" | "in_progress" | "available" | "unavailable" | "not_recommended" | "fail";

/** The kind of a project. */
type TProjectKind = "part_time" | "big_project" | "first_internship" | "second_internship" | "exam" | "rush" | "piscine" | "project" | "module" | "final_module";

interface IGraphProject {
	state: TProjectState;
	final_mark?: number;
	kind: TProjectKind;
	name: string;
	x: number;
	y: number;
	duration: string;
	requirements: string;
	description: string;
	url: string;
	lines: {
		source: {
			x: number,
			y: number
		};
		target: {
			x: number,
			y: number
		};
	}[];
}

// Interface for a graph project.
interface IGraphRenderProject {
	data: IGraphProject;
	selected: boolean;
	renderState: { displayText: string, foreground: string, background: string, textColor: string };
	render: (ctx: CanvasRenderingContext2D, project: IGraphRenderProject) => void;
	// intersects: (x: number, y: number, project: IGraphRenderProject) => boolean;
}

// Interface for a graph.
interface IGraph {
	ranks: TRankState[];
	projects: IGraphRenderProject[];
}

// Graph colors.
const Colors = {
	White:		"#ffffff",
	Red:		"#CC6256",
	Cyan:		"#00BABC", // #00A8C1
	Gray:		"#46484C",
	LightGray:	"#6F7278",
	Orange:		"#FFA300",
};

const ProjectSizes: { [key: string] : number; } = {
	"part_time":			65,
	"big_project":			65,
	"first_internship":		65,
	"second_internship":	65,
	"exam":					15,
	"rush":					8,
	"piscine":				80,
	"project":				50,
	"module":				30,
	"final_module":			50,
};

const ProjectRenderStates = {
	"done": 			{ displayText: "Done", foreground: Colors.Cyan, background: Colors.Cyan, textColor: Colors.White },
	"fail": 			{ displayText: "Fail", foreground: Colors.Red, background: Colors.Red, textColor: Colors.White },
	"available": 		{ displayText: "Available", foreground: Colors.Gray, background: Colors.White, textColor: Colors.White },
	"unavailable":		{ displayText: "Unavailable", foreground: Colors.Gray, background: Colors.LightGray, textColor: Colors.LightGray },
	"in_progress":		{ displayText: "In Progress", foreground: Colors.Gray, background: Colors.Cyan, textColor: Colors.Cyan },
	"not_recommended":	{ displayText: "Not Recommended", foreground: Colors.Gray, background: Colors.Orange, textColor: Colors.Orange },
}

const RankRenderStates: { [key: string] : { color: string, width: number }; } = {
	"done":			{ color: Colors.Cyan, width: 10 },
	"in_progress":	{ color: Colors.Cyan, width: 5 },
	"unavailable":	{ color: Colors.Gray, width: 5 },
};
