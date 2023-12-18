/* Написать функцию, которая создает пустой объект, но без прототипа. */
function createObj () {
	let obj = Object.create(null);
	return obj;
}
const myObject = createObj();
alert(Object.getPrototypeOf(myObject) === null);