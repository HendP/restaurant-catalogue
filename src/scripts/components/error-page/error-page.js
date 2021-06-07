import './style.css';

class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error-image">
        <img id="error-img" src="/images/error/error.svg" alt="error"/>
        <p id="error-text">Data failed to load, please try again.</p>
        </div>
        `;
  }
}

customElements.define('error-page', ErrorPage);
