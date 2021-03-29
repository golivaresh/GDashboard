/* *************************************************************************************************** */
// Variables
let actionSection;
let actionSectionElements;
let btnCloseActionSection;
/* *************************************************************************************************** */
// Ready
$(document).ready(function () {
    actionSection = $('#actionSection');
    btnCloseActionSection = $('#btnCloseActionSection');
    actionSectionElements = $('#actionSection>div#actionInput>div');
    toggleActionSection();
});
/* *************************************************************************************************** */
/* *************************************************************************************************** */
// Header
const toggleActionSection = ( inputId ) => {
    actionSection.toggle( 'clip' );
    btnCloseActionSection.toggle( 'puff' );
    const input = $( `#${inputId}` );
    if ( input && input.hasClass('inactive') ) {
        input.toggleClass('inactive');
    } else {
        actionSectionElements.addClass('inactive');
    }
}