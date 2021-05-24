import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburger-button'),
    drawer: document.querySelector('#navigation-drawer'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});