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
            <div class="container">
                <div class="row-cols-md-3 py-5">
                    <div class="col">
                        <div class="card shadow-sm py-2">
                            <img src="/assets/img/products/${product.id}.png" class="img-product py-3" alt="">
                
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <a type="button" class="btn btn-success btn-lg"><i class="bi bi-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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