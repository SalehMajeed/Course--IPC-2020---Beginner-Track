// Sorting -> arranging things in an order.

function sort_arr(arr_num) {
	arr_num.sort((a, b) => (a > b ? 1 : -1));
	return arr_num;
}

// console.log(sort_arr([20, 40, 10, 15, 25]));

// Insertion Sort
// putting element at the left side and comparing right element with each left element then insert based upon condition.
// TIME COMPLEXITY (O(n^2))
// SPACE COMPLEXITY O(1)
// APPLICATION -> in the case of almost sorted array, online query.
function insertion_sort(arr) {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] > arr[i]) {
			[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
		}
		for (let j = 1; j <= i; j++) {
			if (arr[j - 1] > arr[j]) {
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
			}
		}
	}
	return arr;
}
// console.log(insertion_sort([11, 12, 3, 2, 5]));

// Search -> find element from given value.
function search(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			return true;
		}
	}
	return false;
}
// console.log(search([1, 2, 3], 3));

// Binary Search
// TIME COMPLEXITY O(Log n)
// APPLICATIONS -> in Dictionary.

function binary_search(arr, num) {
	if (arr.length <= 1) {
		if (num == arr[0]) {
			return true;
		} else {
			return false;
		}
	}
	const left = arr.slice(0, arr.length / 2);
	const right = arr.slice(arr.length / 2);
	if (num <= left[left.length - 1]) {
		return binary_search(left, num);
	} else {
		return binary_search(right, num);
	}
}
// console.log(binary_search([2, 3, 4, 10, 23, 47, 56], 47));

function sqrt(num) {
	let left = 0;
	let right = num;
	let mid = parseInt((left + right) / 2);

	while (left <= right) {
		if (mid * mid == num) {
			return mid;
		}
		if (mid * mid > num) {
			right = mid - 1;
			mid = parseInt((left + right) / 2);
		} else {
			left = mid + 1;
			mid = parseInt((left + right) / 2);
		}
	}
	return mid;
}

console.log(sqrt(10));
