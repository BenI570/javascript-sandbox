import { navigation_items } from './seedData.js';
import * as vars from './variables.js';

function createElm(element) {
	return document.createElement(element);
}

export function generateNavbar(items) {
	const navbar = document.querySelector('.d-navbar');

	const logo = createElm('span');
	logo.innerText = 'Logo';
	navbar.appendChild(logo);

	const nav = createElm('nav');
	navbar.appendChild(nav);

	const ul = createElm('ul');
	ul.classList.add('flex');
	nav.appendChild(ul);

	items.forEach((item) => {
		const a = createElm('a');
		a.href = item.link;
		a.innerHTML = '<i class="' + item.icon + '"></i>';
		a.appendChild(document.createTextNode(item.name));
		nav.appendChild(a);
		const li = createElm('li');
		a.appendChild(li);
	});

	console.log(navbar);
}

export function toggleDarkMode() {
	const lightModeBtn = document.getElementById('lightMode');
	const darkModeBtn = document.getElementById('darkMode');
	const body = vars.getBody;
	const isDarkMode = localStorage.getItem('darkMode') === false;

	if (isDarkMode) {
		body.classList.add('darkMode');
		darkModeBtn.classList.add('hidden');
		lightModeBtn.classList.remove('hidden');
	}

	lightModeBtn.addEventListener('click', () => {
		body.classList.remove('darkMode');
		darkModeBtn.classList.remove('hidden');
		lightModeBtn.classList.add('hidden');
		localStorage.setItem('darkMode', 'disabled');
	});

	darkModeBtn.addEventListener('click', () => {
		body.classList.add('darkMode');
		darkModeBtn.classList.add('hidden');
		lightModeBtn.classList.remove('hidden');
		localStorage.setItem('darkMode', 'enabled');
	});
	console.log(localStorage);
}

document.addEventListener('DOMContentLoaded', () => {
	generateNavbar(navigation_items);
});
