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
                <article class="card">
                <div class="card__img">
                    <img src="/assets/img/products/Group 39.png" alt="">
                </div>
                <div class="card__name">
                    <p>AIR ZOOM PEGASUS</p>
                </div>
                <div class="card__precis">
                    <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
                    <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
                </div>
            </article>
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