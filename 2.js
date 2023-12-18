function checkInObj(str, obj) {
	for(let key in obj) {
		if (key === str) {
			return true;
		}
	} 
	return false;
}

let userInfoObj = { name: "Kate", age: "30" };
let result = checkInObj("age", userInfoObj);
console.log(result);




// вариант 2 через метод hasOwnProperty
function checkInObj(str, obj) {
	return obj.hasOwnProperty(str);
}

let userInfoObj = { name: "Kate", age: "30" };
let result = checkInObj("age", userInfoObj);
console.log(result);