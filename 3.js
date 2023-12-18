function createObj () {
	let obj = Object.create(null);
	return obj;
}
const myObject = createObj();
alert(Object.getPrototypeOf(myObject) === null); // проверка пустого obj