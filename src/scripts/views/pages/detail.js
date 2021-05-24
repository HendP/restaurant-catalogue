import UrlParser from '../../routes/url-parser';
import RestaurantResource from "../../data/restaurant-resource";
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="restaurant" class="restaurant"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantResource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
    }
}

export default Detail;