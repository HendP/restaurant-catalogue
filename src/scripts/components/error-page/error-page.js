import './style.css'

class ErrorPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="error-image">
        <img src="/images/error/error.svg" alt="error"/>
        <p>Data failed to load, please try again.</p>
        </div>
        `;
    }
}

customElements.define('error-page', ErrorPage);