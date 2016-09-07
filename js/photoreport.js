var controls = document.querySelectorAll('.photo-miniature li');
var photo = document.querySelector('.photo');

/*Обращение к функции, с помощью цикла*/
for (var i = 0; i < controls.length; i++) {
    clickControl(controls[i]);
}

function togglePhoto(control) {
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('photo-miniature-active');
        photo.classList.remove(controls[i].dataset.choice);
    }

    control.classList.add('photo-miniature-active');

    if (photo) {
        photo.classList.add(control.dataset.choice);
    }
}

function clickControl(control) {
    control.addEventListener('click', function() {
        togglePhoto(control);
    });
}

var defaultFilter = document.querySelector('li.photo2');
togglePhoto(defaultFilter);