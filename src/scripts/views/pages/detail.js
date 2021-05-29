import UrlParser from '../../routes/url-parser';
import RestaurantResource from "../../data/restaurant-resource";
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import Spinner from '../../utils/spinner';
import FormReviewInitiator from '../../utils/form-review-initiator';

const Detail = {
    async render() {
        const display = `
        ${document.querySelector('main').innerHTML = Spinner.showSpinner()}
            <div class="content" id="content">
                <div id="restaurant" class="restaurant"></div>
                <br>
                <h2 class="content-heading"><span>Reviews</span></h2>
                <br>
                <div id="restaurant-review"></div>
                <div id="form-review"></div>
                <div id="likeButtonContainer"></div>
            </div
        `;
        return display;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantResource.detailRestaurant(url.id);
        const contentContainer = document.querySelector('#content');
        const restaurantContainer = document.querySelector('#restaurant');
        const spinner = document.querySelector('#spinner');
        const restaurantReviewContainer = document.querySelector('#restaurant-review');

        try {
            restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
            restaurant.restaurant.customerReviews.forEach((review) => {
                restaurantReviewContainer.innerHTML += createRestaurantReviewTemplate(review);
            });
            await FormReviewInitiator.init({
                formReview: document.querySelector('#form-review'),
                id: restaurant.restaurant.id,
            });
            await LikeButtonInitiator.init({
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
            contentContainer.innerHTML += `<error-page></error-page>`;
            console.log(message);
        }


    }
}

export default Detail;