/* para consumir el JSON ↓ */

/* fetch('/data/data.json')
  .then(response => response.json())
  .then(jsonData => {
    const container = document.querySelector('.container.mx-2');

    for (const obj of jsonData.products) {
      // Crea elementos HTML
      const card = document.createElement('div');
      const img = document.createElement('img');
      const cardBody = document.createElement('div');
      const cardTitle = document.createElement('h5');
      const cardText = document.createElement('p');
      const button = document.createElement('a');

      // Establece las propiedades de los elementos
      card.classList.add('card');
      card.style.width = '18rem';
      img.src = obj.image;
      img.classList.add('card-img-top');
      img.alt = obj.name;
      cardTitle.classList.add('card-title');
      cardTitle.textContent = obj.name;
      cardText.textContent = obj.description;
      button.href = "#";
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Go somewhere';

      // Agrega los elementos al DOM
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(button);
      card.appendChild(img);
      card.appendChild(cardBody);
      container.appendChild(card);
    }
  })
  .catch(error => console.error(error));
 */




/* consumiendo API de unplash */

const API_KEY = 'ou9-JPfFAeSLdiH1-5hSdC2Gwc8AABTGWQQ0ZPW3Tng';
const NUM_PHOTOS = 12;
const API_ENDPOINT = `https://api.unsplash.com/photos/random?count=${NUM_PHOTOS}&client_id=${API_KEY}&query=perfume`;

async function getPhotos() {
    try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.classList.add('custom-card-container');
    
    data.forEach(photo => {
    const card = createCard(photo.urls.regular, photo.alt_description, photo.name, photo.price);
    cardsContainer.appendChild(card);
    });
    } catch (error) {
    console.error(error);
    }
}

function createCard(imgSrc, imgAlt, name, price) {
  const card = document.createElement('div');
  card.classList.add('col-3');
  card.classList.add('mb-4');
  card.classList.add('custom-card');
  card.innerHTML = `
      <div class="card">
          <img src="${imgSrc}" class="card-img-top custom-image" alt="${imgAlt}">
          <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Precio: ${price}</p>
          </div>
      </div>
  `;
  return card;
}


getPhotos();
