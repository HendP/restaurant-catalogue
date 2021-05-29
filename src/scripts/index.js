import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'boxicons';
import 'toastr/build/toastr.css';

import './components/hero-image/hero-image';
import './components/error-page/error-page';

import App from './views/app';
import swRegister from '../scripts/utils/sw-register';

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
    swRegister();
});