"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 14",
    reviews: [
      {
        id: 1,
        text: "Топовый телефон",
      },
      {
        id: 2,
        text: "Супер камера",
      },
    ],
  },
  {
    product: "Google Pixel 8",
    reviews: [
      {
        id: 3,
        text: "Красивый дизайн",
      },
      {
        id: 4,
        text: "Лучшая камера",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 5,
        text: "Лучше, чем XBOX",
      },
    ],
  },
];

const mainDiv = document.querySelector('.app');

let idProduct = 0;

initialData.forEach(element => {
  // Название продукта
  const product = document.createElement('p');
  product.textContent += element.product;
  mainDiv.appendChild(product);

  // Отзывы
  const reviews = document.createElement("ol");
  element.reviews.forEach(element => {
    idProduct = element.id;
    reviews.innerHTML += `<li>${element.text} (ID ${idProduct})</li>`;
  })
  mainDiv.appendChild(reviews);

  // Поле ввода отзыва
  const inputText = document.createElement("input");
  mainDiv.appendChild(inputText);

  // Кнопка отправки отзыва
  const btn = document.createElement("button");
  btn.textContent = "Отправить";
  btn.addEventListener("click", () => {
    if (inputText.value.length >= 50 && inputText.value.length <= 500) {
      idProduct++;
      reviews.innerHTML += `<li>${inputText.value} (ID ${idProduct})</li>`;
    } else {
      errorMessage.textContent = "Комментарий должен быть длинной не менее 50 и не более 500 символов";
    }
  });
  mainDiv.appendChild(btn);

  //Сообщение об ошибке
  const errorMessage = document.createElement("p");
  errorMessage.style.color = "RED";
  mainDiv.appendChild(errorMessage);
})
