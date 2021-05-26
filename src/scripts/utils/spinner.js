const Spinner = {
    
    showSpinner() {
        return `<div id="spinner" class="show"></div>`;
    },

    hideSpinner(spinnerElement) {
        spinnerElement.classList.remove('show');
    },
}

export default Spinner;