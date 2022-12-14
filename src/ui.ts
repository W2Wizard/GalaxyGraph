/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ui.ts                                              :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/14 13:36:58 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/12/14 16:59:50 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const projectSearch = document.getElementById("project_search") as HTMLInputElement;
const projectDatalist = document.getElementById("projects") as HTMLDataListElement;
const cursusSelection = document.getElementById("cursus_selection") as HTMLSelectElement;

/* ************************************************************************** */

cursusSelection.addEventListener("change", (ev: Event) => {
	console.log("Selecting:", cursusSelection.value);
	window.top.postMessage({ type: "graph_data", msg: `Requesting cursus: '${cursusSelection.value}'` }, "*");
});

projectSearch.addEventListener("change", (ev: Event) => {
	if (projectSearch.value == "")
		return;

	console.log("Searching:", projectSearch.value);
	
	let targetProject: IGraphProject | null = null;
	for (const project of graph.projects) {
		if (project.data.name.toLowerCase() === projectSearch.value.toLowerCase()) {
			targetProject = project.data;
			break;
		}
	}
	if (targetProject == null)
		return;

	canvas2D.setViewPosition({x: targetProject.x, y: targetProject.y });
});

window.addEventListener("message", (e) => {
	switch (e.data.type) {
		case "graph_data":
			initGraph(e.data.graph);
			break;
		default:
			window.top.postMessage({type: "error", msg: `Unknown message type: '${e.data.type}'` });
			break;
	}
});
