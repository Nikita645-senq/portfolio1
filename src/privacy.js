const scrollBtn = document.querySelector('.scroll-btn')

const headNav = document.querySelector('.header-nav')
const ourSection = document.querySelector('.privacy')
headNav.style.width = `${ourSection.offsetWidth}px`
window.addEventListener('resize', () => {
    headNav.style.width = `${ourSection.offsetWidth}px`
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        scrollBtn.style.display = 'flex'
    }
    else {
        scrollBtn.style.display = 'none'
    }
})

scrollBtn.addEventListener('click', () => {
    scrollTo(0, 0)
})