/* *************************************************************************************************** */
// Ready
$( document ).ready( ($) => {
    if ( !isSmallScreen() ) {
        toggleMenu();
    }
    /* *************************************************************************************************** */
    // Events
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
        () => {
            // if ( !sidebar.hasClass('m-expanded') ) {
            //     expandedIfActive();
            //     console.log('expandedIfActive');
            // }
        }, () => {
            if ( !sidebar.hasClass('m-expanded') ) {
                hideAccordion();
            }
        }
    );
    /* *************************************************************************************************** */
});
const clickInSmallScreen = ( e ) => {
    // Check if we are in a small screen and the selected button does not have the "active" class.
    if ( isSmallScreen() && !$(e.target || e.toElement).hasClass('active') ) {
        setTimeout(() => {
            toggleMenu();
        }, 100);
    }
};
/* *************************************************************************************************** */
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
    const activeOpc = $('#sidebarAccordion>div.accordion-item>div.accordion-collapse>ul>li.active');
    if ( activeOpc && activeOpc.length > 0 ) {
        $( `#${activeOpc[0].parentElement.parentElement.id}` ).collapse('show');
    }
}

const hideAccordion = () => {
    sidebarAccordionFlush.collapse('hide');
}

/* *************************************************************************************************** */
