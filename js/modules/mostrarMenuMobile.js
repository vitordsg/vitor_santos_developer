export default function mostrarMenuMobile() {
  const navMenu = document.querySelector('.nav-menu')
  const navToggle = document.querySelector('.nav-toggle')
  const navClose = document.querySelector('.nav-close');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('mostrar-menu')
      console.log('click')
    })
  }
  
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('mostrar-menu')
    })
  }
}
  