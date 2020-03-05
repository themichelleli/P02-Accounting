'use strict';
// Add toggling mobile menu icon
// from https://developer.mozilla.org/en-US/docs/Web/API/Element/classList/
var mobileMenu = document.querySelector('.nav__btn-group--mobile');
var mobileMenuIcon = document.querySelector('.nav__mobile-icon');

function toggleMenu() {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
  } else {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hidden');
  }
}

// Add accessible toggle buttons
// from https://smashingmagazine.com/2017/09/building-inclusive-toggle-buttons/
var toggleBtnList = document.querySelectorAll('[aria-pressed]');

toggleBtnList.forEach(function (toggleButton) {
  toggleButton.addEventListener('click', function(e) {
    var pressed = e.target.getAttribute('aria-pressed') === 'true';
    e.target.setAttribute('aria-pressed', String(!pressed));
  });
});
