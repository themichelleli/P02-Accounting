'use strict';

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

