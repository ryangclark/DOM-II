// Stop the navigation items from refreshing the page
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(element => {
    element.addEventListener('click', e => e.preventDefault())
});

// get body
// const body = document.getElementsByTagName('body')['0'];

// window.addEventListener('scroll', e => console.log(window.scrollY));
// console.log(body);

const header = document.getElementsByTagName('header')['0'];
console.log(header);

// –––– Scroll Stuff ––– //
let scrollTicking = false;

function scrollShadow() {
  // Add nav shadow class if scrolled, remove shadow class if not
  if (window.scrollY < 20) {
    header.classList.remove('navShadow');
  } else {
    header.classList.add('navShadow');
  }
}

window.addEventListener('scroll', function(e) {
  if (!scrollTicking) {
    window.requestAnimationFrame(function() {
        console.log('scroll tick')
        scrollShadow();
        scrollTicking = false;
    });
    scrollTicking = true;
  }
});