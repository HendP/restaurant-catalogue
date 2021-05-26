import UrlParser from '../../routes/url-parser';
import RestaurantResource from "../../data/restaurant-resource";
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Spinner from '../../utils/spinner';

const Detail = {
    async render() {
        const display = `
        ${document.querySelector('main').innerHTML = Spinner.showSpinner()}
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
        return display;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantResource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        const spinner = document.querySelector('#spinner');
        
        try {
            restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
            LikeButtonInitiator.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                restaurant: {
                    id: restaurant.restaurant.id,
                    name: restaurant.restaurant.name,
                    description: restaurant.restaurant.description,
                    pictureId: restaurant.restaurant.pictureId,
                    city: restaurant.restaurant.city,
                    rating: restaurant.restaurant.rating,
                },
            });
            Spinner.hideSpinner(spinner);
        } catch (message) {
            Spinner.hideSpinner(spinner);
            console.log(message);
        }


    }
}

export default Detail;