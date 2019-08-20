/*********************************************************************************
 * Manage moduleBreakpoints
 * Gère les points de rupture
 *
 * Usage :
 * if(isMobile) { ... }
 * if(isTablet) { ... }
 * if(isDesktop) { ... }
 ********************************************************************************/

// Helpers responsive
const breakpoints = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200
};

let isMobile = window.innerWidth < breakpoints.sm;
let isTablet = window.innerWidth > breakpoints.sm && window.innerWidth < breakpoints.md ;
let isDesktop = window.innerWidth >= breakpoints.md;
