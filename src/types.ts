/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   types.ts                                           :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/12 13:31:56 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/12/12 14:24:32 by lde-la-h      ########   odam.nl         */
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
	lines: [
		{
			source: { 
				x: number,
				y: number
			};
			target: {
				x: number,
				y: number
			};
		}
	];
	duration: string;
	requirements: string[];
	description: string;
}

// Interface for a graph project.
interface IGraphRenderProject {
	data: IGraphProject
	selected: boolean;
	renderState: { foreground: string, background: string, textColor: string }
	render: (ctx: CanvasRenderingContext2D, project: IGraphRenderProject) => void;
}

// Interface for a graph.
interface IGraph {
	name: string;
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
	"part_time":			80,
	"big_project":			80,
	"first_internship":		80,
	"second_internship":	80,
	"exam":					80,
	"rush":					80,
	"piscine":				80,
	"project":				80,
	"module":				80,
	"final_module":			80,
};

const ProjectRenderStates = {
	"done": 			{ foreground: Colors.Cyan, background: Colors.Cyan, textColor: Colors.White },
	"fail": 			{ foreground: Colors.Red, background: Colors.Red, textColor: Colors.White },
	"available": 		{ foreground: Colors.Gray, background: Colors.White, textColor: Colors.White },
	"unavailable":		{ foreground: Colors.Gray, background: Colors.LightGray, textColor: Colors.LightGray },
	"in_progress":		{ foreground: Colors.Gray, background: Colors.Cyan, textColor: Colors.Cyan },
	"not_recommended":	{ foreground: Colors.Gray, background: Colors.Orange, textColor: Colors.Orange },
}

const RankRenderStates: { [key: string] : { color: string, width: number }; } = {
	"done":			{ color: Colors.Cyan, width: 10 },
	"in_progress":	{ color: Colors.Cyan, width: 4 },
	"unavailable":	{ color: Colors.Gray, width: 4 },
};
