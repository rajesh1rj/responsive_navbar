const toggleButtons = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('nav-links')[0]

toggleButtons.addEventListener('click', () =>{
    navbarlinks.classList.toggle('active')
})