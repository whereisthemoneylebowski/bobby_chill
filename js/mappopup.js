var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add('popUpAnimation');
	mapPopup.classList.add("modal-content-map-open");
	mapClose.classList.add("modal-overlay-open");
	mapCrossClose.classList.add("modal-crossClose-open");
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-map-open");
	mapClose.classList.remove("modal-overlay-open");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (mapPopup.classList.contains("modal-content-map-open")) {
			mapPopup.classList.remove("modal-content-map-open");
			mapClose.classList.remove("modal-overlay-open");
		}
	}
});