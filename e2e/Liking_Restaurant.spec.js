/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.see('Favorite restaurant is empty!', '#error-text');
});

Scenario('liking one restaurant', async ({ I }) => {
  // Check favorite restaurant
  I.see('Favorite restaurant is empty!', '#error-text');

  // Like one restaurant
  I.amOnPage('/');

  I.seeElement('.restaurant-name');

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // Check favorite restaurant
  I.see('Favorite restaurant is empty!', '#error-text');

  // Like one restaurant
  I.amOnPage('/');

  I.seeElement('.restaurant-name');

  const firstRestaurant = locate('.restaurant-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Check favorite restaurant page
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantTitle);

  // Unlike favorite restaurant
  const favoriteRestaurant = locate('.restaurant-name').first();
  I.click(favoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Check favorite restaurant page
  I.amOnPage('/#/favorite');
  I.see('Favorite restaurant is empty!', '#error-text');
});
