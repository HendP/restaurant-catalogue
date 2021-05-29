import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="card-restaurant-detail">
    <h2 class="restaurant-title"><span>${restaurant.name}</span></h2>
    <div class="card-content">
      <div class="card-section image">
        <img class="restaurant-image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </div>
      <div class="card-section information">
        <h3>Rating</h3>
        <p class="card-text">⭐️ ${restaurant.rating}</p>
        <h3>Category</h3>
        ${restaurant.categories.map((categori) => `
          <span class="category">${categori.name}</span>
        `).join('')}
        <h3>Address</h3>
        <p class="card-text">${restaurant.address}</p>
        <h3>City</h3>
        <p class="card-text">${restaurant.city}</p>
      </div>
      <div class="card-section description">
      <h3>Description</h3>
      <p class="card-text">${restaurant.description}</p>
      <h3>Foods</h3>
        <p class="card-text">
        ${restaurant.menus.foods.map((food) => `
          <span class="foods">${food.name}</span>
        `)}
        </p>
      <h3>Drinks</h3>
        <p class="card-text">
        ${restaurant.menus.drinks.map((drink) => `
          <span class="drinks">${drink.name}</span>
        `)}
        </p>
      </div>
    </div>
  </div>
`;

const createRestaurantReviewTemplate = (review) => `
  <div class="review-item">
    <div class="review-photo">
      <box-icon size='60px' type='solid' name='user-circle'></box-icon>
    </div>
    <div class="review-content">
      <div class="review-info">
      <p class="review-name">${review.name}</p>
      <p class="review-date">${review.date}</p>
      </div>
      <p class="review-comment">${review.review}</p>
    </div>
  </div>
`;

const createFormReviewTemplate = () => `
  <form class="form-review">
    <label for="input-name">Name</label><br>
    <input type="text" name="name" class="input-text" id="input-name" placeholder="Input name"><br>
    <label for="input-review">Review</label><br>
    <textarea name="review" class="input-textarea" id="input-review" placeholder="Input your review"></textarea><br>
    <button type="submit" id="submit-review">Submit</button>
  </form>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
        <img class="restaurant-item-header-image" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item-header-rating">
            <p>⭐️<span class="restaurant-item-header-rating-score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item-content">
        <h2><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
        <h5>📍 ${restaurant.city}</h5>
        <p>${restaurant.description}</p>
    </div>
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

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate, createRestaurantReviewTemplate, createFormReviewTemplate };