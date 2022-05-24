// sliders
if (document.querySelector('.offers__swiper-container')) {
    const offersSwiper = new Swiper('.offers__swiper-container--main', {
        slidesPerView: 'auto',

        loop: true,

        wrapperClass: 'offers__list',

        slideClass: 'offers__item',

        navigation: {
            nextEl: '.offers__list-next--main',
            prevEl: '.offers__list-prev--main',
        },
    });
}

if (document.querySelector('.eshop__swiper-container')) {
    const saleSwiper = new Swiper('.eshop__swiper-container', {
        on: {
            slideNextTransitionStart: function () {
                document.querySelector('.eshop__list-prev').classList.remove('eshop__list-prev--hide');
            },

            reachEnd: function () {
                document.querySelector('.eshop__list-next').classList.add('eshop__list-next--hide');
            },

            slidePrevTransitionStart: function () {
                document.querySelector('.eshop__list-next').classList.remove('eshop__list-next--hide');
            },

            reachBeginning: function () {
                document.querySelector('.eshop__list-prev').classList.add('eshop__list-prev--hide');
            },

        },

        slidesPerView: 'auto',

        wrapperClass: 'eshop__sale-list',

        slideClass: 'eshop__sale-item',

        navigation: {
            nextEl: '.eshop__list-next',
            prevEl: '.eshop__list-prev',
        },
    });
}

// close attention bar
const attentionBlockCloseButtons = document.querySelectorAll('.offers__attention-close')

attentionBlockCloseButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.offers__attention').classList.add('offers__attention--hide')
    })
})

// active class of menu items onscroll
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {
        document.querySelectorAll('.js-section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.js-nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.js-nav a').forEach((el) => {
                    if (el.classList.contains('page-header__nav-link--active')) {
                        el.classList.remove('page-header__nav-link--active');
                    }
                });

                document.querySelectorAll('.js-nav li')[i].querySelector('a').classList.add('page-header__nav-link--active');
            }
        });
    }

    // show hidden menu items onscroll
    if (scrollDistance > document.querySelector('.js-header-controls').clientHeight) {
        document.querySelectorAll('.page-header__nav-item--scroll-menu').forEach((it) => {
            it.classList.remove('page-header__nav-item--hide')
        })
    } else {
        document.querySelectorAll('.page-header__nav-item--scroll-menu').forEach((it) => {
            it.classList.add('page-header__nav-item--hide')
        })
    }
});

// scroll to section
document.querySelectorAll('.page-header__nav-link').forEach((link) => {
    link.addEventListener('click', (evt) => {
        evt.preventDefault();
        document.querySelectorAll('.js-section').forEach((section, i) => {
            if(link.dataset.id === section.getAttribute('id')) {
                window.scrollTo({
                    behavior: 'smooth',
                    top: section.offsetTop - document.querySelector('.js-nav').clientHeight,
                });
            }
        })
    })
})
