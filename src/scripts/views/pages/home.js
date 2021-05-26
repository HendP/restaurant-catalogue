import RestaurantResource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import Spinner from '../../utils/spinner';

const Home = {
    async render() {
        const display = `
            <div class="hero-image">
                    <div class="hero-text">
                    <h1 class="hero-title">Good food and great vibes</h1>
                    <p class="hero-tagline">
                        So the only thing we're serious about is food
                    </p>
                    </div>
            </div>
            <div class="content" id="content">
                ${document.querySelector('main').innerHTML = Spinner.showSpinner()}
                <h2 class="content-heading"><span>Explore Restaurants</span></h2>
                <div id="restaurants" class="restaurants">
                
                </div>
            </div>`;
        return display;
    },

    async afterRender() {
        const restaurants = await RestaurantResource.restaurantList();
        const restaurantContainer = document.querySelector('#restaurants');
        const spinner = document.querySelector('#spinner');
        try {
            Spinner.showSpinner(spinner);
            restaurants.forEach((restaurant) => {
                restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            });
            Spinner.hideSpinner(spinner);
        } catch (message) {
            Spinner.hideSpinner(spinner);
            console.log(message);
        }

    }
}

export default Home;