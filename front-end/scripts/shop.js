const categories = document.querySelectorAll('.sub-categories li');
const productsContainer = document.getElementById('products-container');

window.onload = () => {
  products.forEach((product, index) => {
    renderProduct(product, index);
  });
};

categories.forEach((category) => {
  category.addEventListener('click', (event) => {
    productsContainer.innerHTML = '';
    const cat = event.target.textContent;
    const products = filterProducts(cat);

    products.forEach((product, index) => {
      renderProduct(product, index);
    });
  });
});

function filterProducts(category) {
  return products.filter((product) => product.category === category);
}

function renderProduct(product, index) {
  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.style.animationDelay = `${index * 200}ms`;

  productElement.innerHTML = `
    <h1>${
      product.name.substr(0, 25) + (product.name.length > 25 ? '...' : '')
    }</h1>
    <img
      src="${product.image}"
      alt="product image"
    />
    ${
      product.discount ? `<div class="discount">${product.discount}%</div>` : ''
    }
    
    <div class="price-info">
      <div class="prices">
        ${
          product.discount
            ? `
        <div class="discounted-price">
          ${(product.price - product.price * (product.discount / 100)).toFixed(
            2
          )} <span class="small">MAD</span>
        </div>
        <div class="original-price">
          ${product.price.toFixed(2)} <span class="small">MAD</span>
        </div>
        `
            : `<div>${product.price.toFixed(
                2
              )} <span class="small">MAD</span></div>`
        }
      </div>
      <div class="add-to-cart">
        <i class="fa fa-bag-shopping"></i>
      </div>
    </div>
    <div class="stock ${product.inStock ? 'in' : 'out'}">${
    product.inStock ? 'In Stock' : 'Out Of Stock'
  }</div>
  `;

  productsContainer.appendChild(productElement);
}
