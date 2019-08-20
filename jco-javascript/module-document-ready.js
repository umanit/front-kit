/*********************************************************************************
 * Document ready
 * S'il est nécessaire d'attendre que le DOM ait fini de charger
 *
 * Usage :
 * window.addEventListener("scroll", debounce(fonction));
 ********************************************************************************/

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

