export default function slidersInit() {
    $(".hero__slider__wrapper").slick({
            dots: true,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            autoplaySpeed: 4000
        },
        $(".hero__slider__wrapper").on("beforeChange", function (
            event,
            slick,
            currentSlide,
            nextSlide
        ) {
            const mainHeader = $(".header-wrapper");
            const blackSlickDots = $(".slick-dots");
            if (window.scrollY >= 20) {
                return
            } else {
                if (nextSlide === 1) {
                    mainHeader.addClass("white");
                    blackSlickDots.addClass("white");
                } else {
                    mainHeader.removeClass("white");
                    blackSlickDots.removeClass("white");
                }
            }
            window.addEventListener('scroll', () => {
                if (window.scrollY === 0 && nextSlide === 1) {
                    mainHeader.addClass("white");
                } else {
                    mainHeader.removeClass("white");
                }
            })

        })
    );
    $(".news__products").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: `<button class="slick-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="black"/>
    </svg>
    </button>`,
        nextArrow: `<button class="slick-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black"/>
    </svg>
    </button>`,
        cssEase: "linear",
    });
}