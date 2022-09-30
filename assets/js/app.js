document.addEventListener('DOMContentLoaded', (event) => {

    const productContainer = document.querySelector('#productContainer');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/product.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(product => {
                productContainer.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${product.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${product.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })

            console.log(data);
        })
})










/* slider */
$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});