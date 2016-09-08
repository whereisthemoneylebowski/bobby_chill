var button = document.querySelector('.subscribe-form .btn');
var eMailArea = document.querySelector('.subscribe-form .emailtext');

button.addEventListener('click', function(event) {
	event.preventDefault();
	button.setAttribute('value', 'Готово!');
	button.classList.add('button-clicked');
});