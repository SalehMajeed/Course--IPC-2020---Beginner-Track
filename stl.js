// STL -> Standard Template Library.
// PBDS -> Policy Based Data Structure. answers of - find by order, order by key.
// Maps -> key and value pair.
// Vectors -> Dynamic Array.

function difference_vector(n, query) {
	let arr = Array(n).fill(0);
	for (let i = 0; i < query.length; i++) {
		arr[query[i][0]]++;
		if (query[i][1] + 1 < n) {
			arr[query[i][1] + 1]--;
		}
	}

	for (let i = 1; i < n; i++) {
		arr[i] += arr[i - 1];
	}
	return arr;
}

// console.log(
// 	difference_vector(6, [
// 		[1, 4],
// 		[2, 3],
// 	])
// );

// console.log(
// 	difference_vector(6, [
// 		[2, 4],
// 		[1, 4],
// 		[2, 3],
// 	])
// );

// Dequeue -> double ended queue.

const arr = [];
function dequeue() {
	return {
		add_front: function (val) {
			arr.unshift(val);
			return arr;
		},
		remove_front: function () {
			arr.shift();
			return arr;
		},
		add_back: function (val) {
			arr.push(val);
			return arr;
		},
		remove_back: function () {
			arr.pop();
			return arr;
		},
	};
}
console.log(dequeue().add_front(2));
console.log(dequeue().add_front(3));
console.log(dequeue().add_front(4));
console.log(dequeue().add_back(5));
console.log(dequeue().add_back(6));
console.log(dequeue().add_back(7));
console.log(dequeue().remove_front());
console.log(dequeue().remove_front());
console.log(dequeue().remove_front());
console.log(dequeue().remove_back());
console.log(dequeue().remove_back());
console.log(dequeue().remove_back());
