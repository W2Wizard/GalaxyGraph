/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   temp_data.ts                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 10:44:04 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/12/14 17:31:56 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const APIData: IGraphProject[] = [
	{
		x: 0,
		y: 0,
		description: "123",
		duration: "A bad project",
		kind: "project",
		lines: [
			{
				source: { x: 0, y: 0 },
				target: { x: 200, y: 200 },
			},
			{
				source: { x: 0, y: 0 },
				target: { x: 800, y: 800 },
			}
		],
		name: "KFS1",
		requirements: "Ruby on rails is purgatory.",
		state: "available",
		url: ""
	},
	{
		x: 0,
		y: 400,
		description: "A REALLY bad project!",
		duration: "123",
		kind: "project",
		lines: [],
		name: "KFS2",
		requirements: "Imagine being a coding school with a broken API",
		state: "fail",
		url: ""
	},
	{
		x: 0,
		y: 600,
		description: "Just fucking awful dear god",
		duration: "123",
		kind: "project",
		lines: [],
		name: "KFS3",
		requirements: "You need to suffer!",
		state: "in_progress",
		url: ""
	},
	{
		x: 0,
		y: 800,
		description: "React is a bad framework!",
		duration: "123",
		kind: "project",
		lines: [],
		name: "libft",
		requirements: "Die cringe lord!",
		state: "not_recommended",
		url: ""
	},
	{
		x: 400,
		y: 800,
		description: "In this project, you die :)",
		duration: "123",
		kind: "project",
		lines: [],
		name: "LibASM",
		requirements: "So cringe my god",
		state: "done",
		url: ""
	}
];