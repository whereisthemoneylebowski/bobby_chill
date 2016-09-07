var heading = document.querySelector('.pageDescription');

setInterval(function() {
  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256)) +
    ',' +
    (Math.floor(Math.random() * 256))+')';

  heading.style.color = hue;
}, 1500);