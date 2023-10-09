export default function removerMenuMobile() {
  const navLink = document.querySelectorAll(".nav-link");

  const linkAction = () => {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.remove("mostrar-menu");
  };

  navLink.forEach((n) => n.addEventListener("click", linkAction));
}
