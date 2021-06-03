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
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      Spinner.hideSpinner(spinner);
    } catch (message) {
      Spinner.hideSpinner(spinner);
      contentContainer.innerHTML += '<error-page></error-page>';
      console.log(message);
    }
  },
};

export default Favorite;
