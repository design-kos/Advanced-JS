"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
   #books;

   constructor(books) {
      if (!Array.isArray(books)) {
         throw Error("Список книг не является массивом");
      }
      if (arr => arr.filter((item, index) => arr.indexOf(item) !== index).length === 0) {
         this.#books = books;
      } else {
         throw Error("В списке книг содержаться дубликаты");
      }
   };

   allBooks () {
      return this.#books;
   };

   addBook (title) {
      if (this.hasBook(title)) {
         throw Error("Такая книга уже существует");
      }
      this.#books.push(title);
   };

   removeBook (title) {
      if (!this.hasBook(title)) {
         throw Error("Такая книга не существует");
      }
      const id = this.#books.findIndex(e => e === title);
      this.#books.splice(id, 1);
   };

   hasBook (title) {
      return this.#books.includes(title);
   }
}

const lib = new Library(["Азбука", "Война и мир", "Анна Каренина"]);
console.log(lib.allBooks());

lib.addBook("Сказки Пушкина");
console.log(lib.allBooks());

lib.removeBook("Сказки Пушкина");
console.log(lib.allBooks());

console.log(lib.hasBook("Сказки Пушкина"));
console.log(lib.hasBook("Война и мир"));
