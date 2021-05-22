/* *************************************************************************************************** */
/* ***************************************** Global Variables **************************************** */
/* *************************************************************************************************** */
let sidebarBg;
/* *************************************************************************************************** */

$(document).ready(function () {
    sidebarBg = $('#sidebarBg');
});

/* *************************************************************************************************** */
/* ****************************************** Configuration ****************************************** */
/* *************************************************************************************************** */
/**
 * Set the indicated theme.
 * 
 * @param {string} theme Name theme to set.
 * If this parameter is empty, it sets the "red theme" by default.
 * @returns void
 */
 const setTheme = ( theme ) => {
    theme = theme || 'red';
    document.body.className = '';
    document.body.classList.add( `theme-${ theme }` );
    localStorage.setItem( 'g-theme', theme );
};
/**
 * Change de background sidebar.
 * 
 * @param {string} img Background image to be set on the sidebar. If parameter "img" is null, it sets "no-image-bg.jpg" by default.
 * @returns void.
 */
 const changeSidebarBg = ( img ) => {
    img = img || './img/sidebar/no-image-bg.jpg';
    // Save current backgound.
    localStorage.setItem( 'sidebarImgUrl', img );
    CSS_SIDEBAR_BG.background = `url(${ img })`;
    sidebarBg.css(CSS_SIDEBAR_BG);
};
/* *************************************************************************************************** */