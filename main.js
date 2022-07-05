(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}var i=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.scrollToSection=this.scrollToSection.bind(this)}return n(e,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}();function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var o,a,s,c,l,u,f,h,d,v,m,y=function(){function e(n){t(this,e),this.sections=document.querySelectorAll(n),this.windowMetade=.6*window.innerHeight,this.checkDistance=this.checkDistance.bind(this)}return n(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowMetade)}}))}},{key:"checkDistance",value:function(){this.distance.forEach((function(t){window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}();new i('[data-menu="suave"] a[href^="#"]').init(),new y('[data-anime="scroll"]').init(),a=(o=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),s=o.dataset.horario.split(",").map(Number),l=(c=new Date).getDay(),u=c.getHours(),f=-1!==a.indexOf(l),h=u>=s[0]&&u<s[1],f&&h&&o.classList.add("aberto"),function(){var t=document.getElementById("btn-mobile");function e(t){"touchstart"===t.type&&t.preventDefault();var e=document.getElementById("nav");e.classList.toggle("active");var n=e.classList.contains("active");t.currentTarget.setAttribute("aria-expanded",n),n?t.currentTarget.setAttribute("aria-label","Fechar Menu"):t.currentTarget.setAttribute("aria-label","Abrir Menu")}t.addEventListener("click",e),t.addEventListener("touchstart",e)}(),m=document.querySelector("h1.writing"),v=(d=m).innerHTML.split(""),d.innerHTML="",v.forEach((function(t,e){setTimeout((function(){d.innerHTML+=t}),120*e)}))})();