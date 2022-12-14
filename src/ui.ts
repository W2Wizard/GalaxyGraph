/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ui.ts                                              :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/14 13:36:58 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/12/14 18:27:17 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const projectSearch = document.getElementById("project_search") as HTMLInputElement;
const projectDatalist = document.getElementById("projects") as HTMLDataListElement;
const cursusSelection = document.getElementById("cursus_selection") as HTMLSelectElement;

/* ************************************************************************** */

cursusSelection.addEventListener("change", (ev: Event) => {
	console.log("Selecting:", cursusSelection.value);
	canvas2D.stopRender();
	window.top.postMessage({
		type: "graph_data",
		id: parseInt(cursusSelection.getAttribute("value")),
		msg: `Requesting graph for cursus: '${cursusSelection.value}'`
	}, "*");
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
		case "cursus_data": {
			for (const child of cursusSelection)
				child.remove()
			for (const cursus of e.data.cursi) {
				let option = document.createElement('option');
				option.setAttribute("value", cursus.id);
				option.setAttribute("text", cursus.name);
				if (cursus.selected)
					option.setAttribute("selected", "selected");
				cursusSelection.appendChild(option);
			}
			window.top.postMessage({ type: "graph_data", id: parseInt(cursusSelection.getAttribute("value")) });
			break;
		}
		default:
			window.top.postMessage({type: "error", msg: `Unknown message type: '${e.data.type}'` });
			break;
	}
});
