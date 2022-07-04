import ScrollSuave from './modules/scroll-suave';
import initmenuMobile from './modules/menu-mobile';
import initAnimacaoScroll from './modules/scroll-animacao';
import initWritingEffect from './modules/writing-effect';
import initFuncionamento from './modules/funcionamento';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();


initFuncionamento();
initAnimacaoScroll();
initmenuMobile();
initWritingEffect();