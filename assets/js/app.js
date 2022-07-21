const primaryNav = document.querySelector('.primary-navigation')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')


    mobileNavToggle.addEventListener('click', () => {
        const visibilityNan = primaryNav.getAttribute('data-visible')
        if( visibilityNan === "false"){
            primaryNav.setAttribute("data-visible", true)
            mobileNavToggle.setAttribute("aria-expanded", true)
        }else if( visibilityNan === "true"){
            primaryNav.setAttribute("data-visible", false)
            mobileNavToggle.setAttribute("aria-expanded", false)
        }
    })

