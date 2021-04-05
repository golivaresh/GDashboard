/* *************************************************************************************************** */
// Constants
const CSS_SIDEBAR_BG = {
    'background': '',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
};
/* *************************************************************************************************** */
// Ready
$(document).ready(function () {    
    // toggleActionSection();
    checkSidebarBg();
});
/* *************************************************************************************************** */
/* *************************************************************************************************** */
// Header
const toggleActionSection = ( inputId ) => {
    actionSection.toggle( 'fast', () => {} );
    btnCloseActionSection.toggle( 'fast', () => {} );
    const input = $( `#${inputId}` );
    if ( input && input.hasClass('inactive') ) {
        input.toggleClass('inactive');
    } else {
        actionSectionElements.addClass('inactive');
    }
};

const cleanElement = ( inputId, defaultValue ) => {
    const inputElem = $( `#${ inputId }` );
    if ( inputElem && inputElem.length > 0 ) {
        inputElem[0].value = ( defaultValue ) ? defaultValue : '';
        console.log(inputElem[0]);
    }
};


const changeSidebarBg = ( img ) => {
    console.log((img === null || img === undefined) ? img : 'vacio');
    localStorage.setItem( 'sidebarImgUrl', (img) ? img : '' );
    CSS_SIDEBAR_BG.background = `url(${ ((img) ? img : './img/sidebar/no-image-bg.jpg') })`;
    
    sidebarBg.css(CSS_SIDEBAR_BG);
};

const checkSidebarBg = () => {
    const img = localStorage.getItem( 'sidebarImgUrl' );
    changeSidebarBg( img );
};
