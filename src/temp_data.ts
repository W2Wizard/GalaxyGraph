/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   temp_data.ts                                       :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 10:44:04 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/12/14 15:23:46 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const APIData: IGraphProject[] = [
	{
		x: 0,
		y: 0,
		description: "123",
		duration: "123",
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
		requirements: ["123"],
		state: "available",
		url: ""
	},
	{
		x: 0,
		y: 400,
		description: "123",
		duration: "123",
		kind: "project",
		lines: [],
		name: "KFS2",
		requirements: ["123"],
		state: "fail",
		url: ""
	},
	{
		x: 0,
		y: 600,
		description: "123",
		duration: "123",
		kind: "project",
		lines: [],
		name: "KFS3",
		requirements: ["123"],
		state: "in_progress",
		url: ""
	},
	{
		x: 0,
		y: 800,
		description: "123",
		duration: "123",
		kind: "project",
		lines: [],
		name: "libft",
		requirements: ["123"],
		state: "not_recommended",
		url: ""
	},
	{
		x: 400,
		y: 800,
		description: "123",
		duration: "123",
		kind: "project",
		lines: [],
		name: "LibASM",
		requirements: ["123"],
		state: "done",
		url: ""
	}
];