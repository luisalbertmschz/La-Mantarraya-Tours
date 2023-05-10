'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})

sr.reveal(`h1, .hero-title, .hero-text,.btn, .btn-primary, .btn-secondary,
.section-subtitle, h2, .section-title, .section-text, .package-card, .gallery-item, .footer-brand, .footer-contact, .footer-form, .social-list`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.popular-list, .wrapper, .helpline-box`,{
    origin: 'left',
})

sr.reveal(` `,{
    origin: 'right',
    interval: 100,
})
