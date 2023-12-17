//quantity input:
document.addEventListener("click", function (e) {

    var incBtn = e.target.closest("[data-quanity-inc]");
    var decBtn = e.target.closest("[data-quanity-dec]");

    if (incBtn) {

        var quantityValue = incBtn.closest('[data-quanity]').querySelector('[data-quanity-value]');
        var maxValue = +quantityValue.getAttribute("data-max");
        var currentValue = +quantityValue.innerHTML;

        if (maxValue > currentValue) {
            quantityValue.innerHTML = currentValue + 1
        }
    }

    if (decBtn) {

        var quantityValue = decBtn.closest('[data-quanity]').querySelector('[data-quanity-value]');
        var currentValue = +quantityValue.innerHTML;

        if (1 < currentValue) {
            quantityValue.innerHTML = currentValue - 1
        }
    }

});


// see more:
var seeMoreButtons = document.querySelectorAll('[data-see-more-button]');
for (var i = 0; i < seeMoreButtons.length; i++) {
    seeMoreButtons[i].addEventListener('click', function (e) {
        var target = e.target.closest('[data-see-more-button]')?.getAttribute("data-see-more-button");
        var contentWrapper = document.querySelector("[data-see-more-content='" + target + "']");
        if (!contentWrapper) return;

        if (contentWrapper.classList.contains("hidden")) {
            contentWrapper.classList.remove("hidden");
        } else {
            contentWrapper.classList.add("hidden");
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {

    var main = new Splide('.main-carousel', {
        type: 'fade',
        rewind: true,
        pagination: false,
        arrows: false,
        type: 'loop'
    });

    var thumbnails = new Splide('.thumbnail-carousel', {
        gap: 10,
        perPage: 5,
        rewind: true,
        pagination: false,
        isNavigation: true,
        focus: 'center',
        type: 'loop',
        breakpoints: {
            900: {
                perPage: 3,
            },
        }
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();


    var producrsSplide = new Splide('.producrs-splide', {
        pagination: false,
        perPage: 5,
        type: 'loop',
        breakpoints: {
            600: {
                perPage: 1,
            },
            900: {
                perPage: 3,
            },
            1200: {
                perPage: 4,
            },
        },
        direction: 'rtl',
        perMove: 1,
        gap: '1.5rem'
    });
    producrsSplide.mount();

});