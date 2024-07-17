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

		const buttonDiv = createElm('div');
		buttonDiv.classList.add('flex');
		navbar.appendChild(buttonDiv);

		const lightModeButton = createElm('button');
		lightModeButton.classList.add('btn', 'hidden');
		lightModeButton.setAttribute('id', 'lightMode');
		buttonDiv.appendChild(lightModeButton);

		const lightModeIcon = createElm('i');
		lightModeIcon.classList.add('fa-solid', 'fa-sun');
		lightModeButton.appendChild(lightModeIcon);

		const darkModeButton = createElm('button');
		darkModeButton.classList.add('btn');
		darkModeButton.setAttribute('id', 'darkMode');
		buttonDiv.appendChild(darkModeButton);

		const darkModeIcon = createElm('i');
		darkModeIcon.classList.add('fa-solid', 'fa-moon');
		darkModeButton.appendChild(darkModeIcon);
	});

	console.log(navbar);
}

document.addEventListener('DOMContentLoaded', () => {
	generateNavbar(navigation_items);
});

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
