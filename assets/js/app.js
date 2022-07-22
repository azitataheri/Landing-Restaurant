//---------------- VARIABALES -------------------- //
const primaryNav = document.querySelector('.primary-navigation')
const mobileNavToggle = document.querySelector('.mobile-nav-toggle')
const navTab = document.getElementById('nav-tab');
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const slides = document.querySelectorAll('.slide')
let index = 0




//---------------- NAVIGATION -------------------- //
mobileNavToggle.addEventListener('click', () => {
    const visibilityNan = primaryNav.getAttribute('data-visible')
    if (visibilityNan === "false") {
        primaryNav.setAttribute("data-visible", true)
        mobileNavToggle.setAttribute("aria-expanded", true)
    } else if (visibilityNan === "true") {
        primaryNav.setAttribute("data-visible", false)
        mobileNavToggle.setAttribute("aria-expanded", false)
    }
})




//------------------- TABS ------------------------//
function tabActivated(event) {
    let activeTabs = document.querySelectorAll('.active');
    activeTabs.forEach(function (tab) {
        tab.className = tab.className.replace('active', '');
    });

    // activate new tab and panel
    event.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

// click on tab and active or deactive it
navTab.addEventListener('click', tabActivated, false);





//------------------- POULAR DISHES------------------------//
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function display(index){

    slides.forEach((slide) => {
        slide.style.display = 'none'
    })
    
    slides[index].style.display = 'flex'

}
function nextSlide(){
    index++
    if(index > slides.length-1){
        index = 0
    }
    display(index)
}
function prevSlide(){
    index--
    if( index < 0){
        index = slides.length - 1
    }
   display(index)
}
display(index)



