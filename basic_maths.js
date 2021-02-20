// fast exponentiation
function pow(a, b) {
	if (b == 0) {
		return 1;
	}
	if (b % 2 == 0) {
		const half = pow(a, parseInt(b / 2));
		return half * half;
	} else {
		const half = pow(a, parseInt(b / 2));
		return half * half * a;
	}
}
console.log(pow(2, 5));

// Modular Exponentiation
const mod = 1000000007;
function modular_expo(a, b) {
	if (b == 0) {
		return 1;
	}
	if (b % 2 == 0) {
		const half = modular_expo(a, parseInt(b / 2));
		return (half * half) % mod;
	} else {
		let half = modular_expo(a, parseInt(b / 2));
		half = (half * half) % mod;
		half = (half * a) % mod;
		return half;
	}
}

console.log(modular_expo(2, 5));

function last_five(a, b) {
	if (b == 0) {
		return 1;
	}
	if (b % 2 == 0) {
		const half = pow(a, parseInt(b / 2));
		return +String(half * half).slice(-5);
	} else {
		const half = pow(a, parseInt(b / 2));
		return +String(half * half * a).slice(-5);
	}
}

console.log(last_five(2, 20));
