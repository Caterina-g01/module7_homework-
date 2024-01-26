
function getOwnProp(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`Key: ${key}, Value: ${obj[key]}`);
		}
	}
}


const user = {
	name: "Ivan",
	city: "Moscow",
	age: 25
}

const student = Object.create(user);

student.name = "Elena";
student.surname = "Ivanova"

getOwnProp(student);

