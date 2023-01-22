fetch('/data/data.json')
  .then(response => response.json())
  .then(data => {
    let products = data.products;
    let productContainer = document.getElementById('product-container');
    products.forEach(product => {
      let card = `
      <div class="row">
    <div class="col-3">
        <div class="card m-3" style="width: 18rem;">
            <img src="product1-image.jpg" class="card-img-top" alt="Product 1">
            <div class="card-body">
                <h5 class="card-title">Product 1</h5>
                <p class="card-text">$ Price</p>
            </div>
        </div>
    </div>
      `;
      productContainer.innerHTML += card;
    });
  });
