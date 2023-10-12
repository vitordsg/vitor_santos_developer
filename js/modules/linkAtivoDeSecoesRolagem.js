export default function linkAtivoDeSecoesRolagem() {
  const sections = document.querySelectorAll("section[id]");

  const scrollAtivo = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 258;
      const sectionId = current.getAttribute("id");
      const sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("link-ativo");
      } else {
        sectionsClass.classList.remove("link-ativo");
      }
    });
  };
  window.addEventListener("scroll", scrollAtivo);
}
