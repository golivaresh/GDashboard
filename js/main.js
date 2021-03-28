/* *************************************************************************************************** */
// Ready
$(document).ready(function () {
    saveResizeElements();
    let colour = 'red';
    document.body.className = '';
    document.body.classList.add(`theme-${ colour }`);
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
    document.body.className = '';
    document.body.classList.add(`theme-${ theme }`);
    localStorage.setItem('g-theme', theme);
}
// // Add slideDown animation to Bootstrap dropdown when expanding.
// $('.dropdown').on('show.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//   });

//   // Add slideUp animation to Bootstrap dropdown when collapsing.
//   $('.dropdown').on('hide.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//   });
/* *************************************************************************************************** */