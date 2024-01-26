function checkAvailabilitty(str, obj) {
	for (let key in obj) {
		if (obj[key] === str) {
			return true;
		} else {
			return false;
		}
	}
}


const user = {
	name: "Ivan",
	city: "Moscow",
	age: 25
}

const myString = "Ivan";


console.log(checkAvailabilitty(myString, user));










