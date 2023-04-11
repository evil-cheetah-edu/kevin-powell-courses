const navigation_bar    = document.querySelector('.primary-navigation');
const navigation_toggle = document.querySelector('.primary-navigation--toggle')


function toggleHamburger()
{
    const isVisible = navigation_bar.getAttribute('data-visible');

    if ( isVisible === 'false' )
    {
        navigation_bar.setAttribute('data-visible', true);
        navigation_toggle.setAttribute('aria-label', 'close navigation');
        
        return;
    }

    
}


navigation_bar.addEventListener('click', toggleHamburger);