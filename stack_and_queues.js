// Stack
// LIFO Order
// Operations -> push, pop.
// COMPLEXITY -> O(1)
const stack_arr = [];
function stack() {
	return {
		push: function (val) {
			stack_arr.push(val);
			return stack_arr;
		},
		pop: function () {
			stack_arr.pop();
			return stack_arr;
		},
	};
}

// console.log(stack().push(5));
// console.log(stack().push(12));
// console.log(stack().push(15));
// console.log(stack().pop());
// console.log(stack().pop());
// console.log(stack().pop());

// Queue
// FIFO order
// Operations -> Enque, Deque.

const queue_arr = [];
function queue() {
	return {
		enque: function (val) {
			queue_arr.unshift(val); // front
			return queue_arr;
		},
		deque: function () {
			queue_arr.pop(); // rear
			return queue_arr;
		},
	};
}

// console.log(queue().enque(5));
// console.log(queue().enque(12));
// console.log(queue().enque(15));
// console.log(queue().deque());
// console.log(queue().deque());
// console.log(queue().deque());

function valid_paranthesis(str) {
	const stack = [];
	const valid = {
		')': '(',
		']': '[',
		'}': '{',
	};
	for (let i = 1; i < str.length; i++) {
		if ('({['.includes(str[i])) {
			stack.push(str[i]);
		} else if (valid[str[i]] == stack[stack.length - 1]) {
			stack.pop();
		}
	}
	return stack.length == 0 ? true : false;
}
// console.log(valid_paranthesis('(){}[]'));
// console.log(valid_paranthesis('{(]}'));

function just_greater(arr) {
	const stack = [];
	const arr1 = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		while (!stack.length == 0 && stack[stack.length - 1] <= arr[i]) {
			stack.pop();
		}
		if (stack.length == 0) {
			arr1[i] = -1;
		} else {
			arr1[i] = stack[stack.length - 1];
		}
		stack.push(arr[i]);
	}
	return arr1;
}

// console.log(just_greater([4, 5, 2, 25]));

function none_repeating_char(str) {
	const map = {};
	const queue = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] in map) {
			map[str[i]] = map[str[i]] + 1;
			if (str[i] == queue[0]) {
				queue.shift();
			}
		} else {
			map[str[i]] = 1;
			queue.push(str[i]);
		}
	}
	for (key in map) {
		if (map[key] == 1) return key;
	}
	return -1;
}
console.log(none_repeating_char('abaccc'));
console.log(none_repeating_char('abba'));
