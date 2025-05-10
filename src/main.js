const parentQuests = document.querySelector('.faq')
const scrollBtn = document.querySelector('.scroll-btn')

    parentQuests.addEventListener('click', (event) => {
        let target = event.target.closest('.faq-question')
        target.childNodes[1].classList.toggle('active')
        target.childNodes[0].childNodes[1].classList.toggle('active')
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

let backCount = 1
setInterval(function() {
    backCount+= 2
    document.querySelector('.payments').style.background = `linear-gradient(${backCount}deg, #1a1a1a, #444444)`
    document.querySelector('.payments').style.transition = '0.3s'
}, 300)

if(backCount == 360) {
    backCount = 0
}


const headNav = document.querySelector('.header-nav')
const ourSection = document.querySelector('.our-sections')
headNav.style.width = `${ourSection.offsetWidth}px`
window.addEventListener('resize', () => {
    headNav.style.width = `${ourSection.offsetWidth}px`
})