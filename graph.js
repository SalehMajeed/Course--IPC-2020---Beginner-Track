function all_neighbours_of_node(g, x) {
	const neighbour = [];
	for (let i = 0; i <= g.length; i++) {
		if (g[x - 1][i]) {
			neighbour.push(i + 1);
		}
	}
	return neighbour;
}

function adjacency_matrix() {
	const g = [
		[0, 1, 0, 0],
		[0, 0, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
	];
	return all_neighbours_of_node(g, 1);
}

console.log(adjacency_matrix());
