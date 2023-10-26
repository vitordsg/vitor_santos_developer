import mostrarMenuMobile from "./modules/mostrarMenuMobile.js";
import removerMenuMobile from "./modules/removerMenuMobile.js";
import sombraHeader from "./modules/sombraHeader.js";
import botaoParaInicio from "./modules/botaoParaInicio.js";
import linkAtivoDeSecoesRolagem from "./modules/linkAtivoDeSecoesRolagem.js";
import temaEscuroClaro from "./modules/tema-escuro-claro.js";
import enviarEmail from "./modules/email.js";

linkAtivoDeSecoesRolagem();
sombraHeader();
mostrarMenuMobile();
removerMenuMobile();
botaoParaInicio();
temaEscuroClaro();
enviarEmail();

// Relevar Sections ao Scrollar com o mouse
const sr = ScrollReveal( {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animações repetem
})

sr.reveal(`.inicio-perfil`, {origin: 'right'})
sr.reveal(`.inicio-nome, .inicio-info`, {origin: 'left'})

// Relevar Sections ao Scrollar com o mouse
