/*********************************************************************************
Test moduleBreakpoints
 ********************************************************************************/

console.log(isMobile);
console.log(isTablet);
console.log(isDesktop);

window.addEventListener("scroll", debounce(fonctionTest));
// window.addEventListener("scroll", fonctionTest);

function fonctionTest() {
    console.log("debounce scroll")
}

ready(() => {
    /* Do things after DOM has fully loaded */
    console.log("fais des trucs cools steup");
});