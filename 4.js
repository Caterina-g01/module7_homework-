function Device(name, brand, power) {
	this.name = name;
	this.brand = brand;
	this.power = power;
	this.type = "electric device";
	this.pluggedIn = false;
}

let totalPower = 0;

Device.prototype.turnOn = function () {
	if (!this.pluggedIn) {
		this.pluggedIn = true;
		console.log(`${this.name} is now plugged in.`);
		this.calcPower();
	} else {
		console.log(`${this.name} is already plugged in.`);
	}
};

Device.prototype.turnOff = function () {
	if (this.pluggedIn) {
		this.pluggedIn = false;
		console.log(`${this.name} is now unplugged.`);
		totalPower -= this.power;
	} else {
		console.log(`${this.name} is already unplugged.`);
	}
};

Device.prototype.calcPower = function () {
	if (this.pluggedIn === true) {
		totalPower += this.power;
	}
};

function LapTop(brand, power, brightness) {
	Device.call(this, "Laptop", brand, power);
	this.brightness = brightness;
}

LapTop.prototype = Object.create(Device.prototype);
LapTop.prototype.constructor = LapTop;

LapTop.prototype.changeBrightness = function (percent) {
	console.log(`brightness on this ${this.name} is ${percent}%.`);
};

function TV(brand, power, screenSize) {
	Device.call(this, "TV", brand, power);
	this.screenSize = screenSize;
}

TV.prototype = Object.create(Device.prototype);
TV.prototype.constructor = TV;

TV.prototype.changeChannel = function (channel) {
	console.log(`${this.name} is now tuned to channel ${channel}.`);
};

function GameConsole(brand, power, gameCount) {
	Device.call(this, "Game Console", brand, power);
	this.gameCount = gameCount;
}

GameConsole.prototype = Object.create(Device.prototype);
GameConsole.prototype.constructor = GameConsole;

GameConsole.prototype.playGame = function (game) {
	console.log(`Playing ${game} on ${this.name}.`);
};

const lapTop = new LapTop("Acer", 120);
const tv = new TV("Samsung", 130);
const gameConsole = new GameConsole("Nintendo", 160);

tv.turnOn();
tv.changeChannel(3);

lapTop.changeBrightness(100);
lapTop.turnOn();
lapTop.turnOff();

gameConsole.turnOn();
gameConsole.playGame("Super Mario");

console.log(totalPower);




// Альтернативный способ с помощью массива 

/*
function Device(name, brand, power) {
	this.name = name;
	this.brand = brand;
	this.power = power;
	this.type = "electric device";
	this.pluggedIn = false;
}

Device.prototype.plugIn = function () {
	if (!this.pluggedIn) {
		this.pluggedIn = true;
		console.log(`${this.name} is plugged in now.`);
	} else {
		console.log(`${this.name} is already plugged in.`);
	}
};

Device.prototype.unplug = function () {
	if (this.pluggedIn) {
		this.pluggedIn = false;
		console.log(`${this.name} is unplugged now.`);
	} else {
		console.log(`${this.name} is already unplugged.`);
	}
};

const devices = [];

function calcTotalPower() {
	let totalPower = 0;
	for (let device of devices) {
		if (device.pluggedIn) {
			totalPower += device.power;
		}
	}
	return totalPower;
}

const lapTop = new Device("Laptop", "Acer", 120);
const tv = new Device("tv", "Samsung", 130);
const gameConsole = new Device("console", "Nintendo", 160);

devices.push(lapTop, tv, gameConsole);

lapTop.plugIn();
tv.plugIn();

console.log(calcTotalPower());
*/