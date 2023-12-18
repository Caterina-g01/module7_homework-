/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */


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