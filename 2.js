const isProp = (string, obj) => {
	return string in obj
}

const myObject = {
	name: "Ivan",
	city: "Moscow",
	age: 25
}

console.log(isProp("city", myObject))









/*
function isProp(str, obj) {
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
*/















