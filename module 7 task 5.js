//Переписать консольное приложение из предыдущего юнита на классы.

class Device {
  constructor(switched, power) {
  this.material = 'plastic',
  this.getPower = function() {
    console.log(`Power is ${switched} - ${power} w`)
  }
}
}

const light = new Device("ON", 5);
light.price = "5$";

const laptop = new Device("ON", 20);
laptop.system = "windows";
laptop.price = "500$";

const vacuumCleaner =  new Device("OFF", 500);
vacuumCleaner.price = "10$";

light.getPower();
laptop.getPower();
vacuumCleaner.getPower();

console.log('light', light, 'laptop', laptop, 'vacuumCleaner', vacuumCleaner)