const homeMenu = document.querySelector('#homeButton');
const photoAppMenu = document.querySelector('#photoApp');
const designMenu = document.querySelector('#design');
const downloadMenu = document.querySelector('#download');
const navbarToogler = document.querySelector('.fa-bars');
const navBar = document.querySelector('.navbar-nav');

const header = document.querySelector('.jumbotron');
const firstSection = document.querySelector('#first_section');

window.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight;

    if (window.scrollY >= headerHeight) {
      navBar.classList.add('navbarChanged');
      document.querySelector('.jumbotron nav').classList.remove('fixed-top');
    } else {
      navbarToogler.style.color = '#fff';
      navbarToogler.classList.add('navbarTogglerFixed');
      navBar.classList.remove('navbarChanged');
      document.querySelector('.jumbotron nav').classList.add('fixed-top');
    }
  });
});
