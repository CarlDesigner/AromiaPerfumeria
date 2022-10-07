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
});


/* pagina2 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens2Container = document.querySelector('#mens2Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens2.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(mens2 => {
                mens2Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens2.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens2.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});

/* pagina3 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens3Container = document.querySelector('#mens3Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens3.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(mens3 => {
                mens3Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens3.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens3.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});

/* pagina4 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens4Container = document.querySelector('#mens4Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens4.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(mens4 => {
                mens4Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens4.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens4.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});

/* pagina5 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens5Container = document.querySelector('#mens5Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens5.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(mens5 => {
                mens5Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens5.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens5.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});

/* pagina6 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens6Container = document.querySelector('#mens6Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens6.json')
        .then(response => response.json())
        .then(data => {
            shuffle(data);
            data.forEach(mens6 => {
                mens6Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens6.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens6.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});

/* pagina7 */
document.addEventListener('DOMContentLoaded', (event) => {

    const mens7Container = document.querySelector('#mens7Container');
    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    fetch('/assets/data/mens7.json')
        .then(response => response.json())
        .then(data => {
            /* shuffle(data); */
            data.forEach(mens7 => {
                mens7Container.innerHTML += `
                <div class="card____ bg-dark">
                    <img src="/assets/img/products/${mens7.id}.png" alt="" class="card____img">
      
                    <div class="card____content">
                        <div class="card____data">
                            <h1 class="card____title py-3">${mens7.nombre}</h1>
                            <a href="#" class="card____button">Comprar</a>
                        </div>
                    </div>
                /div>
            `
            })
            console.log(data);
        })
});




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