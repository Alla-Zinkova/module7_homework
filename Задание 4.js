function Appliances(name){
  this.brand = "Philips",
  this.country = "China",
  this.controlType = "mechanical",
  this.housingMaterial = "plastic",  
  this.name = name
}

Appliances.prototype.turnOff = function(name){
  console.log(`${name}: turn off from the socket`)
}

Appliances.prototype.turnOn = function(name){
  console.log(`${name}: turn on from the socket`)
}

Appliances.prototype.getPower = function(power){
  console.log(`${power} Вт`)
}

function Iron(name, color, soleCover){
  this.name = name,
  this.color = color,
  this.soleCover = soleCover
}

Iron.prototype.particular = function(){
  console.log('Dispenser for water, self-cleaning from scale')
}

function Toaster(name, number){
  this.name = name,
  this.numberOfToasts = number
}


Iron.prototype = new Appliances()
Toaster.prototype = new Appliances()


const toaster = new Toaster('toaster', 2);
const iron = new Iron('iron', 'blue', 'ceramic');

console.log(toaster)
console.log(iron)

iron.getPower(2000)
