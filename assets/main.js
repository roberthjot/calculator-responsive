/*=========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon':'fa-sun'

// We validate if the user previously chose a topic
if(selectedTheme){
    // if validation is fulfilled, we ask what the issue was to know if we activated or desactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)

}


//Activate / desactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user choese
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})