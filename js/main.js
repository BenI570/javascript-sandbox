import { toggleDarkMode, generateNavbar } from './utils.js';
import { navigation_items } from './seedData.js';

document.addEventListener('DOMContentLoaded', () => {
	generateNavbar(navigation_items);
	toggleDarkMode();
});
