/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств. Данная функция не должна возвращать 
значение. */


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