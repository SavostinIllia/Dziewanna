export default function headerScroll() {
    const pageHeader = document.querySelector('header')
    const pageHeaderWrapper = document.querySelector('.header-wrapper')
    window.addEventListener('scroll', () => {
        const scrolledY = window.scrollY
        if (scrolledY >= 20) {
            pageHeader.classList.add('header-scrolled')
            pageHeaderWrapper.classList.remove('white')
        } else {
            pageHeader.classList.remove('header-scrolled')
        }
    })

}