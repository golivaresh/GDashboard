/* *************************************************************************************************** */
/* ***************************************** Global Variables **************************************** */
/* *************************************************************************************************** */
// Sidebar
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
const _CONF = {
    sidebar: {
        class_collapsed: 'm-collapsed',
        class_expanded: 'm-expanded'
    },
    mainContainer: {
        class_main_collapsed: 'm-main-collapsed',
        class_main_expanded: 'm-main-expanded'
    },
    sidebarOpc: {
        class_opc_collapsed: 'm-opc-collapsed',
        class_opc_expanded: 'm-opc-expanded'
    },
    btnMenuToggle: {
        class_btnMenu_collapsed: 'btn-menu-collapsed',
        class_btnMenu_expanded: 'btn-menu-expanded'
    }
};
const STR_MENU_STAT_LSTORAGE = 'm-status';
const STR_MENU_STAT_DEFAULT = _CONF.sidebar.class_collapsed;
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
            if ( !sidebar.hasClass( _CONF.sidebar.class_expanded ) ) {
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
 * Initialize the sidebar.
 * 
 * @returns void.
 */
const initSidebar = () => {
    // Validates if we're on small screen.
    if ( !isSmallScreen() ) { // The current screen is not small.
        const menuStatusLocal = localStorage.getItem( STR_MENU_STAT_LSTORAGE );
        // Validate if the saved value is equal to the current class of the sidebar.
        if ( menuStatusLocal && !sidebar.hasClass( menuStatusLocal ) ) {
            // Toggle current class
            toggleMenu();
        }
    } else if ( !sidebar.hasClass( _CONF.sidebar.class_collapsed ) ) {
        // If we are on small screen and current class is not equal to the collapsed class.
        toggleMenu();
    }
};
/**
 * Save the current state of the sidebar to local storage.
 * 
 * @returns void.
 */
const saveStatusMenu = () => {
    const val = sidebar.hasClass( _CONF.sidebar.class_expanded ) 
        ? _CONF.sidebar.class_expanded : _CONF.sidebar.class_collapsed;
    localStorage.setItem( STR_MENU_STAT_LSTORAGE, val );
};

/**
 * Toggle classes of menu.
 * 
 * @returns void.
 */
 const toggleMenu = () => {
    // Toggle manu classes.
    sidebar.toggleClass( _CONF.sidebar.class_collapsed );
    sidebar.toggleClass( _CONF.sidebar.class_expanded );
    mainContainer.toggleClass( _CONF.mainContainer.class_main_collapsed );
    mainContainer.toggleClass( _CONF.mainContainer.class_main_expanded );
    sidebarOpc.toggleClass( _CONF.sidebarOpc.class_opc_collapsed );
    sidebarOpc.toggleClass( _CONF.sidebarOpc.class_opc_expanded );
    btnMenuToggle.toggleClass( _CONF.btnMenuToggle.class_btnMenu_collapsed );
    btnMenuToggle.toggleClass( _CONF.btnMenuToggle.class_btnMenu_expanded );
    
    if ( !sidebar.hasClass(_CONF.sidebar.class_expanded) ) {
        // If menu is not expanded, hide the accordion.
        hideAccordion();
    } else {
        // If menu is expanded, expande the active accordion option.
        expandedIfActive();
    }

    if ( !isSmallScreen() ) {
        saveStatusMenu();
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
