export default function rolarParaCima() {
  const roleParaCima = () => {
    const roleCima = document.querySelector('.rolar-para-cima')

    // Quando a rolagem for superior a 350 da viewport, adicionar a classe mostrar-scroll
    scrollY >= 350 ? roleCima.classList.add('mostrar-rolagem') : roleCima.classList.remove('mostrar-rolagem')
  }

  window.addEventListener('scroll', roleParaCima)
}