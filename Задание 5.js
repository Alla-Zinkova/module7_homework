class Appliances {
  constructor(name) {
  this.brand = "Philips";
  this.country = "China";
  this.controlType = "mechanical";
  this.housingMaterial = "plastic";
  this.name = name;

  }
  
  turnOff(){
  console.log(this.name + ": turn off from the socket")
  }
  turnOn(){
  console.log(this.name  + ": turn off from the socket")
  }
  getPower(power){
  this.power = power;
  console.log(`${this.power} Вт`)
  }
}


class Iron extends Appliances {
  constructor(color, soleCover, name){
  super(name);
  this.color = color;
  this.soleCover = soleCover;
  }
  
  particular(){
  console.log("Dispenser for water, self-cleaning from scale")
  }
}


class Toaster extends Appliances {
  constructor(number, name){
  super(name);
  this.numberOfToasts = number;
  }
}


const toaster = new Toaster(2, 'toaster');
const iron = new Iron('blue', 'ceramic', 'iron');


console.log(toaster)
console.log(iron)

iron.particular()
toaster.getPower(2000)
