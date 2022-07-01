/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   graphRendering.ts                                  :+:    :+:            */
/*                                                     +:+                    */
/*   By: lde-la-h <lde-la-h@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/06/30 12:17:22 by lde-la-h      #+#    #+#                 */
/*   Updated: 2022/06/30 14:25:28 by lde-la-h      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

import { data } from "./temp/data";

// Constants
////////////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('galaxy-graph') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const circle = Math.PI * 2

function loadProjects() {

	let projects: any = [];

	data.forEach(function (element) {
		projects.push(new Project(element.x, element.y, element.kind, element.name));
	});

	return projects;
}

// Event Listeners
////////////////////////////////////////////////////////////////////////////////

function renderGraph() {

}

renderGraph();