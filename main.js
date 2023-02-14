let angle = 0;
setInterval(function() {
  angle += 45;
  document.querySelector('.flower').style.transform = 'rotate(' + angle + 'deg)';
}, 100);