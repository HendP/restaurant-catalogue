import RestaurantResource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="hero-image">
                <div class="hero-text">
                <h1 class="hero-title">Good food and great vibes</h1>
                <p class="hero-tagline">
                    So the only thing we're serious about is food
                </p>
                </div>
        </div>
        <div class="content">
            <h2 class="content-heading">Restaurant Catalagoue</h2>
            <div id="restaurants" class="restaurants">
            
            </div>
        </div>
      `;
    },

    async afterRender() {
        const restaurants = await RestaurantResource.restaurantList();
        const restaurantContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    }
}

export default Home;