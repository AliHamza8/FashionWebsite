const mobileNavbar = document.querySelector('.mobile-navbar')
const hamburger = document.querySelector('.hamburger')

mobileNavbar.classList.add('hidden')
hamburger.addEventListener("click", () => {
    if(mobileNavbar.classList.contains('hidden')) {
        mobileNavbar.classList.remove('hidden')
    } else {
        mobileNavbar.classList.add('hidden')
    }
})
