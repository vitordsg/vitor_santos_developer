export default function sombraHeader() {
  const sombra = () => {
    const header = document.querySelector(".header");

    // Quando a rolagem for maior que 50 da viewport de altura, adiciona a classe sombra-header na tag header.
    scrollY >= 50
      ? header.classList.add("sombra-header")
      : header.classList.remove("sombra-header");
  };
  window.addEventListener('scroll', sombra)
}

