/* *************************************************************************************************** */
// Ready
$(document).ready(function () {
    saveResizeElements();
    changeTheme( localStorage.getItem( 'g-theme' ) );
});
/* *************************************************************************************************** */
/* *************************************************************************************************** */
// Resize
$( window ).resize(function() {
    saveResizeElements();
});
function saveResizeElements() {
    $(':root').css('--window-height', $( window ).height() );
    $(':root').css('--window-height-px', ( $( window ).height() + 'px') );
    $(':root').css('--window-width', $(window).width() );
    $(':root').css('--window-width-px', ( $(window).width() + 'px') );
}
const resizeRootVariable = ( varName, value ) => {
    $(':root').css( varName, value );
};

const changeTheme = ( theme ) => {
    theme = ( !theme ) ? 'red' : theme;
    document.body.className = '';
    document.body.classList.add(`theme-${ theme }`);
    localStorage.setItem('g-theme', theme);
}
/* *************************************************************************************************** */