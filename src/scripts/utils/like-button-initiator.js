/* eslint-disable no-underscore-dangle */
import { Notyf } from 'notyf';
import FavoriteRestaurantIdb from '../data/favoriterestaurant-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const notyf = new Notyf({
  duration: 1000,
  position: {
    x: 'center',
    y: 'center',
  },
  types: [
    {
      type: 'warning',
      background: 'orange',
      duration: 2000,
      icon: false,
    },
    {
      type: 'error',
      background: 'red',
    },
    {
      type: 'info',
      background: '#f73859',
    },
  ],
});

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
      notyf.open({
        type: 'info',
        message: 'Added to favorites!',
      });
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      notyf.open({
        type: 'info',
        message: 'Removed from favorites!',
      });
    });
  },
};

export default LikeButtonInitiator;
