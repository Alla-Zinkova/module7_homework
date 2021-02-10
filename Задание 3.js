function createObject(){
  
  const obj = Object.create(null)
  console.log(Object.getPrototypeOf(obj) === null)
}
createObject()
