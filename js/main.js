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