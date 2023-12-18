function showFruits(obj) {
	for (let key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(`Key: ${key}, Value: ${obj[key]}`);
	}
	}
}

let fruits = {
	apples: 2,
	oranges: 3,
};

showFruits(fruits);