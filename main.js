// Products data
const products = [];

fetch('/products')
  .then(response => response.json())
  .then(data => {
    products.push(...data);
    renderProducts();
  });

function renderProducts() {
  const productGrid = document.querySelector('.product-grid');
  productGrid.innerHTML = '';
  products.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
      </div>
    `;
    productGrid.insertAdjacentHTML('beforeend', productHTML);
  });
}