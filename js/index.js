// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let valorPrice = price.innerText;

  let newSubtotal = Number(valorPrice) * quantity;

  subtotal.innerText = newSubtotal.toFixed(2);

  return newSubtotal;
}

// ITERATION 2

function calculateAll() {
  let allProducts = document.querySelectorAll(`.product`);

  let sum = 0;

  allProducts.forEach((product) => {
    updateSubtotal(product);
    sum += parseFloat(product.querySelector('.subtotal span').innerHTML);
    return sum;
  });

  // ITERATION 3

  let total = document.querySelector('#total-value span');
  total.innerText = sum.toFixed(2);
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode;
  const grandParent = parent.parentNode;
  const greatGrandParent = grandParent.parentNode;

  greatGrandParent.removeChild(grandParent);

calculateAll();
}

// ITERATION 5

function createProduct(event) {
  
  const createProductRow = event.currentTarget.parentNode.parentNode;

  const nameInputElement = createProductRow.querySelector('input[type=text]');
  const priceInputElement =
  createProductRow.querySelector('input[type=number]');

  const name = nameInputElement.value;
  const price = priceInputElement.value;

  const newProductRow = `
    <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `;

const trElement = document.createElement('tr');
trElement.className = 'product';

trElement.innerHTML = newProductRow;


  const tbodyElement = createProductRow.parentNode.previousElementSibling;

  tbodyElement.appendChild(trElement);

  addRemoveListeners();
}

function addRemoveListeners() {

let allRemoveButtons = document.querySelectorAll(`.btn-remove`);

allRemoveButtons.forEach((btn) => {
  btn.addEventListener(`click`, removeProduct);
});
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 addRemoveListeners();

  const createBtn = document.getElementById('create');
  createBtn.addEventListener(`click`, createProduct);
});
