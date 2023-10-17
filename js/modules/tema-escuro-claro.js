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
}