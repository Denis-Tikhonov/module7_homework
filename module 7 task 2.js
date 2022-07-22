// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const myBook = {
  title: "Voyna_i_mir",
  author: "Tolstoy",
  number: "111"
};

let checkTitle = "title"; // проверяемое свойство:

function checkBook(checkTitle, myBook) {
  if (checkTitle in myBook) {
    return true;
  } else {
    return false;
  }
}

// Проверка функции:
console.log(checkBook(checkTitle, myBook));