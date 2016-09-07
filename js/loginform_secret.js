var loginFormOpen = document.querySelector(".login");
var loginFormPopup = document.querySelector(".modal-window");
var loginFormClose = document.querySelector(".modal-overlay");
var loginFormCrossClose = document.querySelector(".modal-crossClose");

function popUpClosing() {
	event.preventDefault();
	loginFormPopup.classList.remove("modal-window-open");
	loginFormClose.classList.remove("modal-overlay-open");
}

loginFormOpen.addEventListener("click", function(event) {
	event.preventDefault();
	loginFormPopup.classList.add('popUpAnimation');
	loginFormPopup.classList.add("modal-window-open");
	loginFormClose.classList.add("modal-overlay-open");
	loginFormCrossClose.classList.add("modal-crossClose-open");
});

loginFormClose.addEventListener("click", function(event) {
	popUpClosing();
});

loginFormCrossClose.addEventListener("click", function(event) {
	popUpClosing();
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (loginFormPopup.classList.contains("modal-window-open")) {
			loginFormPopup.classList.remove("modal-window-open");
			loginFormClose.classList.remove("modal-overlay-open");
		}
	}
});