/* eslint-disable no-underscore-dangle */
import toastr from 'toastr';
import RestaurantResource from '../data/restaurant-resource';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReview, id }) {
    this.formReview = formReview;
    this._id = id;
    toastr.options = {
      positionClass: 'toast-bottom-right',
    };
    await this._renderFormReview();
  },

  async _renderFormReview() {
    this.formReview.innerHTML = createFormReviewTemplate();

    const btnSubmitReview = document.querySelector('#submit-review');

    btnSubmitReview.addEventListener('click', async (element) => {
      element.preventDefault();

      const form = document.querySelector('form');
      const name = document.querySelector('#input-name');
      const review = document.querySelector('#input-review');

      const formReview = {
        id: this._id,
        name: name.value,
        review: review.value,
      };

      if (name.value === '') {
        toastr.error('Name cannot be empty!');
      } else if (review.value === '') {
        toastr.error('Review cannot be empty!');
      } else {
        await RestaurantResource.reviewRestaurant(formReview);
        form.reset();
        toastr.success('Review has been submit!');
        this._renderReview(formReview.name, formReview.review);
      }
    });
  },

  _renderReview(name, review) {
    const restaurantReviewContainer = document.querySelector('#restaurant-review');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const reviewRestaurant = `
        <div class="review-item">
            <div class="review-photo">
                <box-icon size='60px' type='solid' name='user-circle'></box-icon>
            </div>
            <div class="review-content">
            <div class="review-info">
                <p class="review-name">${name}</p>
                <p class="review-date">${date}</p>
            </div>
            <p class="review-comment">${review}</p>
            </div>
        </div>
        `;

    restaurantReviewContainer.innerHTML += reviewRestaurant;
  },
};

export default FormReviewInitiator;
