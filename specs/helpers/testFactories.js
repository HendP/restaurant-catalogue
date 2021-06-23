import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeRestaurantButton = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
        favoriteRestaurant: FavoriteRestaurantIdb,
    });
};

export {createLikeRestaurantButton};