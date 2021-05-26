import FavoriteRestaurantIdb from "../../data/favoriterestaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorite = {
    async render() {
        return `
        <div class="content" id="content">
            <h2 class="content-heading"><span>Your Favorite Restaurant</span></h2>
            <div id="restaurants" class="restaurants">
            
            </div>
        </div>
      `;
    },

    async afterRender() {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      const restaurantContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    },
}

export default Favorite;