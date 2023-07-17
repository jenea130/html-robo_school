$(document).ready(function() {
    const slider = $(".trainers__wrap")

    if (slider) {
        trainersSlider()
    }

    function trainersSlider() {
        slider.slick({
            slidesToShow:3,
            slidesToScroll:1,
            speed: 1000,
            arrows:false,
            dots: true
        })
        const trainers__arrow_prev = $('.trainers__arrow--prev')
        const trainers__arrow_next = $('.trainers__arrow--next')
        trainers__arrow_prev.on('click', function() {
            slider.slick('slickPrev')
        })
        trainers__arrow_next.on('click', function() {
            slider.slick('slickNext')
        })
    }
});

