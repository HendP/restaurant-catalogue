/* eslint-disable no-console */
import RestaurantResource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../../utils/spinner';

const Home = {
  async render() {
    const display = `
            <hero-image></hero-image>
            <div class="content" id="content">
                <h2 class="content-heading"><span>Explore Restaurants</span></h2>
                ${(document.querySelector('main').innerHTML =
                  Spinner.showSpinner())}
                <div id="restaurants" class="restaurants">
                
                </div>
            </div>`;
    return display;
  },

  async afterRender() {
    const restaurants = await RestaurantResource.restaurantList();
    try {
      const restaurantContainer = document.querySelector('#restaurants');
      const spinner = document.querySelector('#spinner');
      Spinner.showSpinner(spinner);
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML +=
          createRestaurantItemTemplate(restaurant);
      });
      Spinner.hideSpinner(spinner);
    } catch (message) {
      Spinner.hideSpinner(spinner);
      restaurantContainer.innerHTML += '<error-page></error-page>';
      console.log(message);
    }
  },
};

export default Home;
