function getKey(obj){
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      console.log(key, obj[key]);
    }
  }
}


// проверка
const user = {
  age: 15,
}

const person = Object.create(user)

person.lastName = "Zinkova";
person.name = "Alla";

getKey(person)
