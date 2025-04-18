import { openModal } from './modals.js';
import { smoothScroll } from './scroll.js';

document.querySelector('.open-modal').addEventListener('click', openModal);
document.querySelector('.smooth-scroll').addEventListener('click', smoothScroll);