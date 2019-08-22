/*********************************************************************************
 * Debounce
 * Performances : limite les appels à une fonction donnée pour l'événement scroll
 *
 * Usage :
 * window.addEventListener("scroll", debounce(fonction));
 ********************************************************************************/

export default function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


