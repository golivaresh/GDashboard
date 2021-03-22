/* *************************************************************************************************** */
let sidebar;
let mainContainer;
let btnMenuToggle;
let sidebarContainer;
let sidebarFooter;
let sidebarOpc;
let sidebarAccordionOpc;
/* *************************************************************************************************** */
/* *************************************************************************************************** */
// Ready
$( document ).ready( ($) => {
    mainContainer = $( '#mainContainer' );
    sidebar = $( '#sidebar' );
    btnMenuToggle = $( '.btnMenuToggle' );
    sidebarContainer = $( '#sidebarContainer' );
    sidebarOpc = $( '#sidebarOpc' );
    sidebarFooter = $( '#sidebarFooter' );
    sidebarAccordionOpc = $( '#sidebarAccordion>.accordion-item>[class^="accordion-collapse"]>ul>li' );

    resizeSiderbarElements();

    /* *************************************************************************************************** */
    // Events
    btnMenuToggle.click( (e) => { 
        toggleMenu();
        e.preventDefault();
    });
    sidebarAccordionOpc.click( (e) => {
        // Check if we are in a small screen and the selected button does not have the "active" class.
        if ( isSmallScreen() && !$(e.target || e.toElement).hasClass('active') ) {
            setTimeout(() => {
                toggleMenu();
            }, 100);
        }
        e.preventDefault();
    });
    sidebar.hover(
        () => {
            if ( !sidebar.hasClass('m-expanded') ) {
                expandedIfActive();
            }
        }, () => {
            if ( !sidebar.hasClass('m-expanded') ) {
                hideAccordion();
            }
        }
    );
    /* *************************************************************************************************** */
});
/* *************************************************************************************************** */
// Resize
$( window ).resize(() => {
    resizeSiderbarElements();
});
const resizeSiderbarElements = () => {
    setTimeout(() => {
        resizeRootVariable( '--m-sidebar-footer-h-px', `${ sidebarOpcHeight() }px` );
    }, 200);
}

const resizeRootVariable = ( varName, value ) => {
    $(':root').css( varName, value );
};
const sidebarOpcHeight = () => {
    return sidebarContainer.outerHeight() - (sidebarFooter.outerHeight() + 5);
};
/* *************************************************************************************************** */
// Screen Size functions
const isSmallScreen = () => {
    return ( $(window).width() < 768 );
}
/* *************************************************************************************************** */

/* *************************************************************************************************** */
// Menu functions
const toggleMenu = () => {
    toggleClasses();
    //resizeSiderbarElements();
}

const toggleClasses = () => {
    sidebar.toggleClass( 'm-collapsed' );
    sidebar.toggleClass( 'm-expanded' );
    mainContainer.toggleClass('m-main-collapsed');
    mainContainer.toggleClass('m-main-expanded');
    sidebarOpc.toggleClass( 'm-opc-collapsed' );
    sidebarOpc.toggleClass( 'm-opc-expanded' );
    btnMenuToggle.toggleClass( 'btn-menu-collapsed' );
    btnMenuToggle.toggleClass( 'btn-menu-expanded' );

    if ( !sidebar.hasClass('m-expanded') ) {
        hideAccordion();
    } else {
        expandedIfActive();
    }
};

const expandedIfActive = () => {
    // const activeOpc = $('[id^="flush-collapse"]>ul>li.active');
    const activeOpc = $('.accordion-collapse>ul>li.active');
    if ( activeOpc && activeOpc.length > 0 ) {
        const parentOpc = activeOpc[0].parentElement; 
        if ( parentOpc && parentOpc.parentElement ) {
            $( `#${parentOpc.parentElement.id}` ).collapse('show');
        }
    }
}

const hideAccordion = () => {
    $('.collapse').collapse('hide');
}

/* *************************************************************************************************** */
