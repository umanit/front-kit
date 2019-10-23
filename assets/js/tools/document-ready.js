/*********************************************************************************
 * Document ready
 * S'il est nécessaire d'attendre que le DOM ait fini de charger
 *
 * Usage :
 * ready(() => console.log("DOM is ready!"));
 ********************************************************************************/

export default (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

