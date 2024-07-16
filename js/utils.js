import { navigation_items } from './seedData.js';
import { getBody } from './variables.js';

export function generateNavbar(items) {
	const navbar = document.querySelector('.d-navbar');

	const logo = document.createElement('span');
	logo.innerText = 'Logo';
	navbar.appendChild(logo);

	const nav = document.createElement('nav');
	navbar.appendChild(nav);

	const ul = document.createElement('ul');
	ul.classList.add('flex');
	nav.appendChild(ul);

	items.forEach((item) => {
		const a = document.createElement('a');
		a.href = item.link;
		a.innerHTML = '<i class="' + item.icon + '"></i>';
		a.appendChild(document.createTextNode(item.name));
		nav.appendChild(a);
		const li = document.createElement('li');
		a.appendChild(li);
	});

	console.log(navbar);
}

export function toggleDarkMode() {
	const lightModeBtn = document.getElementById('lightMode');
	const darkModeBtn = document.getElementById('darkMode');

	const isDarkMode = localStorage.getItem('darkMode') === false;

	if (isDarkMode) {
		getBody.classList.add('darkMode');
		darkModeBtn.classList.add('hidden');
		lightModeBtn.classList.remove('hidden');
	}

	lightModeBtn.addEventListener('click', () => {
		getBody.classList.remove('darkMode');
		darkModeBtn.classList.remove('hidden');
		lightModeBtn.classList.add('hidden');
		localStorage.setItem('darkMode', 'disabled');
	});

	darkModeBtn.addEventListener('click', () => {
		getBody.classList.add('darkMode');
		darkModeBtn.classList.add('hidden');
		lightModeBtn.classList.remove('hidden');
		localStorage.setItem('darkMode', 'enabled');
	});
	console.log(localStorage);
}

document.addEventListener('DOMContentLoaded', () => {
	generateNavbar(navigation_items);
});
