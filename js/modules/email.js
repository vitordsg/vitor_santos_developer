export default function enviarEmail() {
  const contatoForm = document.querySelector(".contato-form");
  const contatoMensagem = document.querySelector(".contato-mensagem");
  const enviarEmail = (e) => {
    e.preventDefault();
    // serviceID - templateID - #form - publickKey
    emailjs
      .sendForm(
        "service_t4bamab",
        "template_jug2h9v",
        "#contato-form",
        "8rhKa0NcK5Vyr-PDJ"
      )
      .then(
        () => {
          // Mostrar enviar mensagem
          contatoMensagem.textContent = "Mensagem enviada com sucesso!✔️";

          // Remover mensagem após 5 segundos
          setTimeout(() => {
            contatoMensagem.textContent = "";
          }, 5000);

          // Limpar as caixas de texto
          contatoForm.reset();
        },
        () => {
          // Mostrar Mensagem de Error!
          contatoMensagem.textContent =
            "Mensagem não enviada (ERRO de serviço ❌)";
        }
      );
  };
  contatoForm.addEventListener("submit", enviarEmail);
}
