/* *************************************************************************************************** */
/* ***************************************** Global Variables **************************************** */
/* *************************************************************************************************** */
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
/* ******************************************** Constants ******************************************** */
/* *************************************************************************************************** */
// Header
const CSS_SIDEBAR_BG = {
    'background': '',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
    'background-size': 'cover',
};
/* *************************************************************************************************** */

/* *************************************************************************************************** */
/* ********************************************** Ready ********************************************** */
/* *************************************************************************************************** */
/**
 * Set the variables.
 * 
 * @returns void.
 */
const setComponents = () => {
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
};
/**
 * Set component events.
 */
const setEvents = () => {
    $( window ).resize(function() {
        saveResizeElements();
    });
    btnMenuToggle.click( (e) => { 
        toggleMenu();
        e.preventDefault();
    });
    sidebarProfileOpc.click( (e) => {
        clickInSmallScreen( e );
        e.preventDefault();
    });
    sidebarAccordionOpc.click( (e) => {
        clickInSmallScreen( e );
        e.preventDefault();
    });
    sidebar.hover(
        () => { // Mouseenter event.
        }, () => { // Mouseleave event.
            // If the sidebar is not expanded, hide the accordion.
            if ( !sidebar.hasClass('m-expanded') ) {
                hideAccordion();
            }
        }
    );
};
/**
 * Check if we are in a small screen and the selected button does not have the "active" class.
 * If this si true it doesn't do any action, otherwise close the menu.
 * 
 * @param {Event} e Event emmited.
 * @returns void.
 */
 const clickInSmallScreen = ( e ) => {
    if ( isSmallScreen() && !$(e.target || e.toElement).hasClass('active') ) {
        setTimeout(() => {
            toggleMenu();
        }, 100);
    }
};
/* *************************************************************************************************** */

/* *************************************************************************************************** */
/* ****************************************** Configuration ****************************************** */
/* *************************************************************************************************** */
/**
 * Toggle classes of menu.
 * 
 * @returns void.
 */
 const toggleMenu = () => {
    // Toggle manu classes.
    sidebar.toggleClass( 'm-collapsed' );
    sidebar.toggleClass( 'm-expanded' );
    mainContainer.toggleClass('m-main-collapsed');
    mainContainer.toggleClass('m-main-expanded');
    sidebarOpc.toggleClass( 'm-opc-collapsed' );
    sidebarOpc.toggleClass( 'm-opc-expanded' );
    btnMenuToggle.toggleClass( 'btn-menu-collapsed' );
    btnMenuToggle.toggleClass( 'btn-menu-expanded' );
    
    if ( !sidebar.hasClass('m-expanded') ) {
        // If menu is not expanded, hide the accordion.
        hideAccordion();
    } else {
        // If menu is expanded, expande the active accordion option.
        expandedIfActive();
    }
};
/**
 * Expande Menu option if submenu is active.
 * 
 * @returns void.
 */
 const expandedIfActive = () => {
    // Obtains the active option.
    const activeOpc = $('#sidebarAccordion>div.accordion-item>div.accordion-collapse>ul>li.active');
    // Validate if any active option was obteined.
    if ( activeOpc && activeOpc.length > 0 ) {
        // Show the accordion parent.
        $( `#${activeOpc[0].parentElement.parentElement.id}` ).collapse('show');
    }
};
/**
 * Hide accordion of menu.
 * 
 * @returns void.
 */
const hideAccordion = () => {
    sidebarAccordionFlush.collapse('hide');
};
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

/* *************************************************************************************************** */
/* ********************************************** Resize ********************************************* */
/* *************************************************************************************************** */
/**
 * Saves height and width of the windows in "root" variables.
 * 
 * @return void
 */
const saveResizeElements = () => {
    saveRootVariable( '--window-height', $( window ).height() );
    saveRootVariable( '--window-height-px', ( $( window ).height() + 'px') );
    saveRootVariable( '--window-width', $(window).width() );
    saveRootVariable( '--window-width-px', ( $(window).width() + 'px') );
};
/**
 * Save value in ":root" variable.
 * 
 * @param {string} varName Variable name.
 * @param {string} value Value to save.
 * @returns void
 */
const saveRootVariable = ( varName, value ) => {
    $(':root').css( varName, value );
};
/**
 * Check if current screen is small.
 * 
 * @returns boolean If screen width less than 768px returns true, false otherwise.
 */
 const isSmallScreen = () => {
    return ( $(window).width() < 768 );
};
/* *************************************************************************************************** */

/* *************************************************************************************************** */
/* ********************************************** Header ********************************************* */
/* *************************************************************************************************** */
/**
 * Open/close "action section".
 * 
 * @param {string} inputId id of the element tto show
 * @returns void.
 */
 const toggleActionSection = ( inputId ) => {
    actionSection.toggle( 'fast', () => {} );
    btnCloseActionSection.toggle( 'fast', () => {} );
    const input = $( `#${inputId}` );
    
    if ( input && input.hasClass('inactive') ) { // if the input is inactive.
        // Remove "inactive" class.
        input.toggleClass('inactive');
    } else {
        // Close the "action section".
        actionSectionElements.addClass('inactive');
    }
};
/**
 * Clean input element.
 * 
 * @param {string} inputId id of the element to clean.
 * @param {string} defaultValue value to set in the element.
 * @returns void.
 */
const cleanElement = ( inputId, defaultValue ) => {
    const inputElem = $( `#${ inputId }` );
    if ( inputElem && inputElem.length > 0 ) {
        inputElem[0].value = ( defaultValue || '' );
    }
};
/* *************************************************************************************************** */

/* *************************************************************************************************** */
/* ************************************** Bootstrap components *************************************** */
/* *************************************************************************************************** */
// Popovers.
const popoverTriggerList = [].slice.call( document.querySelectorAll( '[data-bs-toggle="popover"]' ) );
const popoverList = popoverTriggerList.map( function ( popoverTriggerEl ) {
  return new bootstrap.Popover( popoverTriggerEl );
});
/* *************************************************************************************************** */
