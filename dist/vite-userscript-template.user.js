// ==UserScript==
// @name         vite-userscript-template
// @namespace    npm/vite-plugin-monkey
// @version      1.0.0
// @author       author
// @description  description
// @license      ISC
// @icon         https://dev.songe.li/favicon.svg
// @homepage     https://github.com/lisonge/vite-userscript-template#readme
// @homepageURL  https://github.com/lisonge/vite-userscript-template#readme
// @source       https://github.com/lisonge/vite-userscript-template.git
// @supportURL   https://github.com/lisonge/vite-userscript-template/issues
// @match        https://www.google.com/
// ==/UserScript==

;(({ cssTextList = [] }) => {
  cssTextList.forEach((s) => {
    const style = document.createElement("style");
    style.innerText = s;
    style.dataset.source = "vite-plugin-monkey";
    document.head.appendChild(style);
  });
})({
  "cssTextList": [
    "img[alt='Google'] {\r\n    height: 120px;\r\n    max-width: none;\r\n    max-height: none;\r\n}\r\n"
  ]
});

(function() {
  "use strict";
  var style = "";
  const logoElement = document.querySelector(`img[alt='Google']`);
  if (logoElement) {
    logoElement.src = "https://cdn.jsdelivr.net/gh/33kk/uso-archive@flomaster/data/screenshots/173462_after.gif";
    logoElement.removeAttribute("srcset");
  }
})();
 
