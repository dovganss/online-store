const form = document.querySelector('.form');
const button = document.querySelector('.form__button');
const products = document.querySelector('.products');

const nameInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const linkInput = document.querySelector('#link');
const priceInput = document.querySelector('#price');


button.addEventListener('click', function() {
  event.preventDefault();
  products.insertAdjacentHTML('beforeend', 
  `<li class="products__item product">
  <div class="basket">
  <img class="basket__img" src="./img/basket.png"></div>
  <img src="${form.elements.link.value}" class="product__img" alt="Фото продукта">
  <h2 class="product__title">${form.elements.name.value}</h2>
  <p class="product__text">${form.elements.description.value}</p>
  <div class="product__price">${form.elements.price.value}</div></li>`)
  let basketNew = document.getElementsByClassName('basket');

  [].forEach.call(basketNew, function(targetBasketNew) {
    targetBasketNew.onclick = function(e) {
      targetBasketNew.parentNode.remove();
    }
  });
})

let basket = document.querySelectorAll('.basket');

[].forEach.call(basket, function(targetBasket) {
  targetBasket.onclick = function(e) {
    targetBasket.parentNode.remove();
  }
});



