import './style.css';

class ErrorAccess extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="error-image">
        <img src="/images/error/error.svg" alt="error"/>
        <p>Page not found 404.</p>
        </div>
        `;
  }
}

customElements.define('error-access', ErrorAccess);
