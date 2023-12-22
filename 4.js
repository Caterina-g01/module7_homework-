function Device(name, power) {
	this.light = 'brightness';
	this.name = name;
	this.pluggedIn = false;
	this.power = power || 0;
}

Device.prototype.getConsumption = function () {
	console.log(`${this.name} consumes ${this.power} watt`);
};

Device.prototype.turnOn = function () {
	if (!this.pluggedIn) {
		this.pluggedIn = true;
		console.log(`${this.name} is now plugged in.`);
	} else {
		console.log(`${this.name} is already plugged in.`);
	}
};

Device.prototype.turnOff = function () {
	if (this.pluggedIn) {
		this.pluggedIn = false;
		console.log(`${this.name} is now unplugged.`);
	} else {
		console.log(`${this.name} is already unplugged.`);
	}
};

function ScreenDevice(name, type, power) {
	Device.call(this, name, power);
	this.type = type;
}

ScreenDevice.prototype = Object.create(Device.prototype);

const tv = new ScreenDevice("tv", "television", 100);
const lapTop = new ScreenDevice("laptop", "computers", 80);

tv.turnOn();
lapTop.turnOn();

function calculateTotalPower(devices, operatingHours) {
	let totalPower = 0;
	devices.forEach(device => {
		if (device.pluggedIn) {
			totalPower += device.power * operatingHours;
		}
	});
	return totalPower;
}

const operatingHours = 2;
const devices = [tv, lapTop];
const totalPower = calculateTotalPower(devices, operatingHours);

console.log(`Total power consumption of all plugged-in devices in ${operatingHours} hours: ${totalPower} watt`);

tv.turnOff();
lapTop.turnOff();