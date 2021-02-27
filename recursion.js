// Recursion -> a programming technique where a function call itself again and again to solve some problem with extra memory buffer.

function factorial(n) {
	if (n <= 1) {
		return 1;
	}

	return n * factorial(n - 1); // Recurrence Relation -> Mathematic Representation of Function
}

// console.log(factorial(170));

function fibonacci(n) {
	if (n == 0 || n == 1) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(3));

function party(n) {
	if (n == 1 || n == 2) {
		return n;
	}
	return party(n - 1) + (n - 1) * party(n - 2);
}

// console.log(party(4));

// Backtracking -> it is an algorithm that tries to find a solution to a given parameter. it builds the sub problems recurssively & abands those which can't fulfill the condition.

var result = 0;

const visited = new Array([]);

function is_safe(i, j, n) {
	return i >= 0 && i < n && j >= 0 && j < n;
}

function rat_in_maze(arr, n, i, j, visited) {
	if (arr[n - 1][n - 1] == 1) {
		return;
	}

	if (i == n - 1 && j == n - 1) {
		result++;
		return;
	}

	if (!is_safe(i, j, n)) {
		return;
	}

	visited[i][j] = 1;

	if (is_safe(i - 1, j, n) && arr[i - 1][j] == 0 && visited[i - 1][j] == 0) {
		rat_in_maze(arr, n, i - 1, j, visited);
	}

	if (is_safe(1 + i, j, n) && arr[1 + i][j] == 0 && visited[1 + i][j] == 0) {
		rat_in_maze(arr, n, 1 + i, j, visited);
	}

	if (is_safe(i, j - 1, n) && arr[i][j - 1] == 0 && visited[i][j - 1] == 0) {
		rat_in_maze(arr, n, i, j - 1, visited);
	}

	if (is_safe(i, 1 + j, n) && arr[i][1 + j] == 0 && visited[i][1 + j] == 0) {
		rat_in_maze(arr, n, i, 1 + j, visited);
	}

	visited[i][j] = 0;
}

rat_in_maze(
	[
		[0, 0, 1, 0, 0, 1, 0],
		[1, 0, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 1, 0, 1],
		[1, 0, 1, 0, 0, 0, 0],
		[1, 0, 1, 1, 0, 1, 0],
		[1, 0, 0, 0, 0, 1, 0],
		[1, 1, 1, 1, 0, 0, 0],
	],
	7,
	0,
	0,
	visited
); // 4

console.log(result);
