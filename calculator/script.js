const display = document.getElementById('display');

function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = '';
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch {
		clearDisplay();
		alert('Please enter a valid expression!');
	}
}
