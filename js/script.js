'use strict'

// hamburger

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__nav');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      nav.classList.toggle('nav_active');
    });
  });