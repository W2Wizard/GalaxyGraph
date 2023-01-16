/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   ui.ts                                              :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <main@w2wizard.dev>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/12/14 13:36:58 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/12/14 18:58:08 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const projectSearch = document.getElementById("project_search") as HTMLInputElement;
const projectDatalist = document.getElementById("projects") as HTMLDataListElement;
const cursusSelection = document.getElementById("cursus_selection") as HTMLSelectElement;
const campusSelection = document.getElementById("campus_selection") as HTMLSelectElement;
const projectLink = document.getElementById("project_link") as HTMLAnchorElement;

/* ************************************************************************** */

const requestGraphData = () => {
	canvas2D.stopRender();
	window.top.postMessage({
		type: "graph_data",
		cursus_id: parseInt(cursusSelection.value),
		campus_id: parseInt(campusSelection.value),
		msg: `Requesting graph for cursus: '${cursusSelection.value} and campus ${campusSelection.value}'`
	}, "*");
}

cursusSelection.addEventListener("change", (ev: Event) => {
	console.log("Selecting cursus:", cursusSelection.value);
	requestGraphData();
});

campusSelection.addEventListener("change", (ev: Event) => {
	console.log("Selecting campus:", campusSelection.value);
	requestGraphData();
});

projectLink.addEventListener("click", (ev: Event) => {
	ev.preventDefault();
	window.top.postMessage({
		type: "project_link_click",
		href: projectLink.getAttribute("href")
	}, "*");
});

projectSearch.addEventListener("change", (ev: Event) => {
	if (projectSearch.value == "")
		return;

	console.log("Searching:", projectSearch.value);

	let targetProject: IGraphProject | null = null;
	for (const project of graph.projects) {
		project.selected = false;
		if (project.data.name.toLowerCase() === projectSearch.value.toLowerCase()) {
			targetProject = project.data;
			project.selected = true;
			break;
		}
	}

	if (targetProject != null)
		canvas2D.setViewPosition({x: targetProject.x, y: targetProject.y });
});

window.addEventListener("message", (e) => {
	switch (e.data.type) {
		case "graph_data":
			initGraph(e.data.graph);
			break;
		case "init_data": {
			// Populate cursus selection
			for (const child of cursusSelection)
				child.remove()
			for (const cursus of e.data.cursi) {
				let option = document.createElement('option');
				option.setAttribute("value", cursus.id);
				option.innerText = cursus.name;
				if (cursus.selected)
					option.setAttribute("selected", "selected");
				cursusSelection.appendChild(option);
			}
			if (cursusSelection.children.length > 1)
				cursusSelection.removeAttribute("disabled");
			else
				cursusSelection.setAttribute("disabled", "disabled");

			// Populate campus selection
			for (const child of campusSelection)
				child.remove()
			for (const campus of e.data.campi) {
				let option = document.createElement('option');
				option.setAttribute("value", campus.id);
				option.innerText = campus.name;
				if (campus.selected)
					option.setAttribute("selected", "selected");
				campusSelection.appendChild(option);
			}
			if (campusSelection.children.length > 1)
				campusSelection.removeAttribute("disabled");
			else
				campusSelection.setAttribute("disabled", "disabled");

			// Request graph data for the selected cursus and campus
			requestGraphData();
			break;
		}
		default:
			window.top.postMessage({type: "error", msg: `Unknown message type: '${e.data.type}'` }, "*");
			break;
	}
});
