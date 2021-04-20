/* *************************************************************************************************** */
// Variables
// Sidebar
let sidebarBg;
let sidebar;
let mainContainer;
let btnMenuToggle;
let sidebarContainer;
let sidebarFooter;
let sidebarOpc;
let sidebarAccordionOpc;
let sidebarAccordionFlush;
// Header
let actionSection;
let actionSectionElements;
let btnCloseActionSection;
// Login
// let divLogin;
// let divFormLogin;
// let divFormSignIn;
// let btnToggleLoginDiv;
/* *************************************************************************************************** */
/* *************************************************************************************************** */
// Ready
$(document).ready(function () {
    // Sidebar
    mainContainer = $( '#mainContainer' );
    sidebar = $( '#sidebar' );
    btnMenuToggle = $( '.btnMenuToggle' );
    sidebarContainer = $( '#sidebarContainer' );
    sidebarBg = $('#sidebarBg');
    sidebarOpc = $( '#sidebarOpc' );
    sidebarFooter = $( '#sidebarFooter' );
    sidebarProfileOpc = $( '#sidebar>#sidebarContainer>#sidebarOpc>#profileItems>ul>li' );
    sidebarAccordionOpc = $( '#sidebarAccordion>div.accordion-item>[class^="accordion-collapse"]>ul>li' );
    sidebarAccordionFlush = $('#sidebarAccordion>div.accordion-item>div[id^="flushCollapse"].collapse');
    // Header
    actionSection = $('#actionSection');
    btnCloseActionSection = $('#btnCloseActionSection');
    actionSectionElements = $('#actionSection>div#actionInput>div');
    // Login
    // divLogin = $('#divLogin');
    // divFormLogin = $('#divFormLogin');
    // divFormSignIn = $('#divFormSignIn');
    // btnToggleLoginDiv = $('.btn-toggle-login');

    saveResizeElements();
    changeTheme( localStorage.getItem( 'g-theme' ) );

    // btnToggleLoginDiv.click(function (e) { 
    //     divFormLogin.toggleClass( 'show' );
    //     divFormSignIn.toggleClass( 'show' );
    //     divLogin.toggleClass( 'show-sign-in' );
    //     e.preventDefault();
    // });
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
    // $(':root').css('--div-login-height-px', ( '-' + divFormLogin.height() + 'px') );
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
// Bootstrap componentes
// Popovers.
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
/* *************************************************************************************************** */
/* *************************************************************************************************** */