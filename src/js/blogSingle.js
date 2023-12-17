document.addEventListener('DOMContentLoaded', function () {

    var blogSplide = new Splide('.blog-splide', {
        arrows: false,
        perMove: 1,
        focus: false,
        autoHeight: true,
        type: 'loop',
        perPage: 1,
        direction: 'rtl',
        gap: '1.5rem'
    });
    blogSplide.mount();

});