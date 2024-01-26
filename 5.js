class Device {
	constructor(name, brand, power) {
		this.name = name;
		this.brand = brand
		this.power = power;
		this.type = "electric device";
		this.pluggedIn = false;
	}



	turnOn() {
		if (!this.pluggedIn) {
			this.pluggedIn = true;
			console.log(`${this.name} is now plugged in.`);
			this.calcPower();
		} else {
			console.log(`${this.name} is already plugged in.`);
		}
	}

	turnOff() {
		if (this.pluggedIn) {
			this.pluggedIn = false;
			console.log(`${this.name} is now unplugged.`);
			totalPower -= this.power;
		} else {
			console.log(`${this.name} is already unplugged.`);
		}
	}

	calcPower() {
		if (this.pluggedIn) {
			totalPower += this.power;
		}
	}
}

class LapTop extends Device {
	constructor(brand, power, brightness) {
		super("Laptop", brand, power);
		this.brightness = this.brightness;
	}

	changeBrightness(percent) {
		console.log(`Brightness on this ${this.name} is ${percent}%.`);
	}
}

class TV extends Device {
	constructor(brand, power, screenSize) {
		super("TV", brand, power);
		this.screenSize = screenSize;
	}

	changeChannel(channel) {
		console.log(`${this.name} is now tuned to channel ${channel}.`);
	}
}

class GameConsole extends Device {
	constructor(brand, power, gameCount) {
		super("Game Console", brand, power);
		this.gameCount = gameCount;
	}

	playGame(game) {
		console.log(`Playing ${game} on ${this.name}.`);
	}
}

let totalPower = 0;
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