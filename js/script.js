$(document).ready(function() {
    const slider = $(".trainers__wrap")

    if (slider) {
        trainersSlider()
    }

    function trainersSlider() {
        slider.slick({
            slidesToShow:3,
            slidesToScroll:3,
            arrows:false,
            dots: true
        })
    }
});

