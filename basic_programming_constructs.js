function fibonacci(x) {
	const zero_even_fibonacci = 0;
	const first_even_fibonacci = 2;

	let a = 0,
		b = 2,
		c = 2;

	while (c <= x) {
		c = 4 * b + a;
		a = b;
		b = c;
		if (c <= x) {
			console.log(c);
		}
	}
}

// console.log(fibonacci(1000));

function pair(arr) {
	let sum = 0;
	let sqsum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
		sqsum = sqsum + arr[i] * arr[i];
	}

	return (sum * sum - sqsum) / 2;
}

console.log(pair([1, 2, 3]));
