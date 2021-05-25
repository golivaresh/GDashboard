/* *************************************************************************************************** */
/* ***************************************** Global Variables **************************************** */
/* *************************************************************************************************** */
let sidebarBg;
/* *************************************************************************************************** */
/* *************************************************************************************************** */

/* *************************************************************************************************** */
/* ******************************************** Constants ******************************************** */
/* *************************************************************************************************** */
const _CSS_SIDEBAR_BG = {
    'background': '',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
};
const _STR_THEME_ID_LSTORAGE = 'g-theme';
const _STR_THEME_DEFAULT = 'red';
const _STR_BG_ID_LSTORAGE = 'sidebar-img-url';
const _STR_BG_DEFAULT_IMG = './img/sidebar/no-image-bg.jpg';
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
    theme = theme || _STR_THEME_DEFAULT;
    document.body.className = '';
    document.body.classList.add( `theme-${ theme }` );
    localStorage.setItem( _STR_THEME_ID_LSTORAGE, theme );
};
/**
 * Change de background sidebar.
 * 
 * @param {string} img Background image to be set on the sidebar. If parameter "img" is null, it sets "no-image-bg.jpg" by default.
 * @returns void.
 */
 const changeSidebarBg = ( img ) => {
    img = img || _STR_BG_DEFAULT_IMG;
    // Save current backgound.
    localStorage.setItem( _STR_BG_ID_LSTORAGE, img );
    _CSS_SIDEBAR_BG.background = `url(${ img })`;
    sidebarBg.css(_CSS_SIDEBAR_BG);
};
/* *************************************************************************************************** */