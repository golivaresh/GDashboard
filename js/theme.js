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
/* *************************************************************************************************** */