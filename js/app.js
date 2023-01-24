/* consumiendo API de unplash */
/* const API_KEY = "ou9-JPfFAeSLdiH1-5hSdC2Gwc8AABTGWQQ0ZPW3Tng";
const NUM_PHOTOS = 6;
const API_ENDPOINT = `https://api.unsplash.com/photos/random?count=${NUM_PHOTOS}&client_id=${API_KEY}&query=perfume`;

async function getPhotos() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.classList.add("custom-card-container");

    data.forEach((photo) => {
      const card = createCard(
        photo.urls.regular,
        photo.alt_description,
        photo.name,
        photo.price
      );
      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}

function createCard(imgSrc, imgAlt, name, price) {
  const card = document.createElement("div");
  card.classList.add("col-3");
  card.classList.add("mb-4");
  card.classList.add("custom-card");

  const img = new Image();
  img.src = imgSrc;
  img.alt = imgAlt;
  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 400; 
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 300, 400);
    imgSrc = canvas.toDataURL();
  };

  card.innerHTML = `
    <div class="product-card">
      <img class="product-image" src="${imgSrc}" width="180px" height="300px">
      <h3 class="product-name">${name}</h3>
      <p class="product-price">${price}</p>
      <button class="buy-button">Comprar</button>
    </div>
    `;
  return card;
}
getPhotos();
 */