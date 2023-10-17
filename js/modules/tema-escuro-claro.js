export default function temaEscuroClaro() {
  const botaoTema = document.querySelector('.mudar-tema')
  const temaEscuro = 'tema-escuro'
  const temaClaro = 'ri-sun-line'

  // tópico selecionado anteriormente (se o usuário tiver selecionado)
  const temaSelecionado = localStorage.getItem('tema-selecionado')
  const iconeSelecionado = localStorage.getItem('icone-selecionado')

  // Obtemos qual o tema atual que a página possuiu, validando com a classe tema-escuro
  const obterTemaAtual = () => document.body.classList.contains(temaEscuro) ? 'escuro' : 'claro'
  const obterIconeAtual = () => botaoTema.classList.contains(temaClaro) ? 'ri-moon-clear-line' : 'ri-sun-line'

  // Validamos se o usuário escolheu previamente um tema na página
  if (temaSelecionado) {

    // Se a validação for feita, perguntamos qual foi o problema para saber se ativamos ou desativamos o escuro
    document.body.classList[temaSelecionado === 'escuro' ? 'add' : 'remove'](temaEscuro)
    botaoTema.classList[iconeSelecionado === 'ri-moon-clear-line' ? 'add' : 'remove'](temaClaro)
  }

  botaoTema.addEventListener('click', () =>{
    // Adiciona ou remove tema escuro / tema icone
    document.body.classList.toggle(temaEscuro)
    botaoTema.classList.toggle(temaClaro)

    // Salvamos o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('tema-selecionado' , obterTemaAtual())
    localStorage.setItem('icone-selecionado' , obterIconeAtual())
  })
}