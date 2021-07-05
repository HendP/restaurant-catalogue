import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../../utils/spinner';

const Favorite = {
  async render() {
    const display = `
        ${document.querySelector('main').innerHTML = Spinner.showSpinner()}
        <div class="content" id="content">
            <h2 class="content-heading"><span>Your Favorite Restaurant</span></h2>
            <div id="restaurants" class="restaurants">
            
            </div>
        </div>
      `;
    return display;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const contentContainer = document.querySelector('#content');
    const restaurantContainer = document.querySelector('#restaurants');
    const spinner = document.querySelector('#spinner');

    try {
      if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
          restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
        Spinner.hideSpinner(spinner);
      } else if (restaurants.length === 0) {
        Spinner.hideSpinner(spinner);
        contentContainer.innerHTML += '<error-page></error-page>';
        document.querySelector('.content-heading').remove();
        document.getElementById('error-img').src = '/images/error/empty.svg';
        document.getElementById('error-text').innerHTML = 'Favorite restaurant is empty!';
      }
    } catch (message) {
      Spinner.hideSpinner(spinner);
      contentContainer.innerHTML += '<error-page></error-page>';
      console.log(message);
    }
  },
};

export default Favorite;
