import './style.css'

class HeroImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="hero-image">
            <div class="hero-text">
            <h1 class="hero-title">Good food and great vibes</h1>
            <p class="hero-tagline">
                So the only thing we're serious about is food
            </p>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-image', HeroImage);