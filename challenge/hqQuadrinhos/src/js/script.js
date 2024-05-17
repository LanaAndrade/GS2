const btnNavResponsiva = document.getElementById('btnNavResponsiva');
const navMenu = document.getElementById('nav-menu-items');
const logo = document.getElementById('logo');

btnNavResponsiva.addEventListener('click', function() {

    if (navMenu.style.display === 'none') {
        navMenu.style.display = 'flex';
        btnNavResponsiva.textContent = 'Hide Content';
        logo.textContent = 'Hide Content'
  } else {
    navMenu.style.display = 'none';
    btnNavResponsiva.textContent = 'Show Content';
    logo.textContent = 'Hide Content'
  }
});
