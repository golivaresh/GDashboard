/* *************************************************************************************************** */
// Ready
$(document).ready(function () {
    saveResizeElements();
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
/* *************************************************************************************************** */