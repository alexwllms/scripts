let SCROLLED = false;

window.addEventListener('scroll', function () {
  SCROLLED = true;
});

setInterval(function () {
  if (SCROLLED === true) {
    // callFunction();
    SCROLLED = false;
  }
}, 250);
