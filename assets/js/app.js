/* Exemple usage on librairies Delete this on project */

import breakpoints from './tools/breakpoints';
import debounce from './tools/debounce';
import ready from './tools/document-ready';
import '../scss/style.scss';

console.log(breakpoints);

window.addEventListener("scroll", debounce(fonctionTest));
// window.addEventListener("scroll", fonctionTest);

function fonctionTest() {
    console.log("debounce scroll")
}

ready(() => {
    /* Do things after DOM has fully loaded */
    console.log("fais des trucs cools steup");
});

/* End Exemple */
