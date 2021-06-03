const Spinner = {

  showSpinner() {
    // eslint-disable-next-line quotes
    return `<div id="spinner" class="show"></div>`;
  },

  hideSpinner(spinnerElement) {
    spinnerElement.classList.remove('show');
  },
};

export default Spinner;
