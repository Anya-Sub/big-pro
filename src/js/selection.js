/* PLAN
  1) Добавить минус к карточкам
  2) Создать переменую которая будет счетчиком товаров (0)
  3) Обратиться к плюсам 
    3.1 Нажатие увеличивает счетчик на 1
  4) Обратиться к минусам
    4.1 Нажатие уменьшает счетчик на 1
  5) Отображать счетчик возле корзины
    5.1 Обратиться к хтмл контейнеру где будет лежать счетчик
    5.2 При каждом изменении убирать старый счетчик и ренедерить новый
*/
const btnPlus = document.querySelectorAll('.btn__plus');
const btnMin = document.querySelectorAll('.btn__min');
const productsContainer = document.querySelector('.menu__box-counter');

let products = 0;

btnPlus.forEach(item => {
  item.addEventListener('click', () => {
    products++;
    productsContainer.innerHTML = products;
  });
});

btnMin.forEach(item => {
  item.addEventListener('click', () => {
    if (products > 0) {
      products--;
      productsContainer.innerHTML = products;
    }
  });
});

productsContainer.innerHTML = 0;

// fetch('https://623a0c0728bcd99f0279398a.mockapi.io/Products')
//   .then(response => response.json())
//   .then(json => console.log(json))
