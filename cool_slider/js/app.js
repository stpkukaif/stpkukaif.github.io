const sliderMain = new Swiper('.slider__main',{
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }


});
const sliderBg = new Swiper('.slider__bg',{
    freeMode: true,
    centeredSlides: true,
    parallax: true,
    mousewheel: true,
    spaceBetween: 60,
    slidesPerView: 3.5


});
sliderBg.controller.control = sliderMain;

var desc = document.getElementById('desc');


sliderBg.on('slideChange', e => {
    sliderBg.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})