// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  let valorPrice = price.innerText;
  let newSubtotal = Number(valorPrice) * quantity;

  subtotal.innerText = newSubtotal;

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
  total.innerText = sum;
  console.log(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode;
  const grandParent = parent.parentNode;
  const greatGrandParent = grandParent.parentNode;

  console.log(grandParent);

  greatGrandParent.removeChild(grandParent);
}

// ITERATION 5
console.log(document.querySelector('.product'));
function createProduct(){

  const newProductName = document.getElementById('new-product-name');
  const newProductPrice = document.getElementById('new-product-price');
  const productList = document.getElementById('product-list');
  productList.innerHTML += 
  ` <td class="name">
      <span>${createName}</span>
    </td>
    <td class="price">$<span>${createPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" id = "myInput"/>
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

    document.querySelector('#new-product-name').value = '';
    document.querySelector('#new-product-price').value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveButtons = document.querySelectorAll(`.btn-remove`);

  allRemoveButtons.forEach((btn) => {
    btn.addEventListener(`click`, removeProduct);
  });

   const createBtn = document.querySelector(`#create`);
   createBtn.addEventListener(`click`, createProduct);
});


