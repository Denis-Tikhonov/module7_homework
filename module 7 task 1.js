//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const person = {
    name: "Vladimir",
    age: 22,
    profession: "programmer"
  }

function checkObj(obj) {
    for (let key in obj) {
      console.log(`ключ: ${key}, со свойством: ${obj[key]}`);
    }
  }
  
  checkObj(person);