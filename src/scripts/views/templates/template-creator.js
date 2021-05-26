import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img class="restaurant-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant-info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant-overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <a class="check-detail" href="${`/#/detail/${restaurant.id}`}">
      <div class="restaurant-item-header">
          <img class="restaurant-item-header-image" alt="${restaurant.name}"
              src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
          <div class="restaurant-item-header-rating">
              <p>⭐️<span class="restaurant-item-header-rating-score">${restaurant.rating}</span></p>
          </div>
      </div>
      <div class="restaurant-item-content">
          <h2>${restaurant.name}</h2>
          <h5>📍 ${restaurant.city}</h5>
          <p>${restaurant.description}</p>
      </div>
    </a>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };