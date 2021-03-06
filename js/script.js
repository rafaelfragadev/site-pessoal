import ScrollSuave from './modules/scroll-suave';
import ScrollAnima from './modules/scroll-anima';
import initmenuMobile from './modules/menu-mobile';
import initWritingEffect from './modules/writing-effect';
import initFuncionamento from './modules/funcionamento';
import initFormulario from './modules/formulario';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

initFormulario();

initFuncionamento();
initmenuMobile();
initWritingEffect();