
//Count-down        
function countDown(t) {

    var minute = 60;
    var hour = 60 * minute;
    var day = 24 * hour;

    var number = t;
    var days = Math.floor(number / day);
    number = number % day;
    var hours = Math.floor(number / hour);
    number = number % hour;
    var minutes = Math.floor(number / minute);
    var seconds = number % minute;

    function createTimeItem(value, unit) {
        function padNumber(n) {
            if (!n) {
                return "00";
            }
            return n.toString().padStart(2, '0');
        }
        return ('<span class="bg-blue-800/25 text-white rounded-2xl h-11 py-2 pt-3 px-2 sm:px-3 block text-2xs lg:text-base"><span class="w-6 inline-block text-center font-semibold align-middle"> ' + padNumber(value) + ' </span> <span class="text-xs font-light text-white/75 inline-block align-middle"> ' + unit + ' </span></span>')
    }

    return (createTimeItem(days, 'روز') + createTimeItem(hours, 'ساعت') + createTimeItem(minutes, 'دقیقه') + createTimeItem(seconds, 'ثانیه'));
}

document.querySelectorAll('.count-down').forEach(element => {

    var value = +element.getAttribute('data-timer');

    element.innerHTML = countDown(value);

    var timer = setInterval(() => {
        value--;

        element.innerHTML = countDown(value);

        if (value < 1) {
            clearInterval(timer);
        }
    }, 1000);

});
// END ---- Count-down



// Brands Accordion
var brandsToggleBtn = document.getElementById("brand_toggle-btn");
var brandsToggleBtnIcon = brandsToggleBtn.querySelector("svg");
var brandsToggleContent = document.getElementById("brand_toggle-content");

function ShowOnlyFirstBrandsRow() {
    var brandsToggleItem = brandsToggleContent.querySelector(".brands-accordion-item");
    brandsToggleContent.style.maxHeight = brandsToggleItem.offsetHeight + "px";
    brandsToggleContent.classList.remove("active");
    brandsToggleBtnIcon.style.transform = "rotate(0)";
}
function ShowAllBrands() {
    brandsToggleContent.classList.add("active");
    brandsToggleContent.style.maxHeight = brandsToggleContent.scrollHeight + "px";
    brandsToggleBtnIcon.style.transform = "rotate(180deg)";
}

window.onresize = ShowOnlyFirstBrandsRow;
window.onload = ShowOnlyFirstBrandsRow;

brandsToggleBtn.addEventListener('click', (e) => {
    if (brandsToggleContent.classList.contains("active")) {
        ShowOnlyFirstBrandsRow();
    } else {
        ShowAllBrands()
    }
});
// END ---- Brands Accordion


// START ----- car type tab;
var carTypeTabs = document.querySelectorAll('[data-car-type-tab]');
for (var i = 0; i < carTypeTabs.length; i++) {
    carTypeTabs[i].addEventListener("click", e => {
        var targetAttributeValue = e.target.closest("button").getAttribute('data-car-type-tab');
        var carTypeTabContent = document.querySelector('[data-car-type-content]');

        for (var j = 0; j < carTypeTabs.length; j++) {
            var item = carTypeTabs[j];
            if (item.getAttribute('data-car-type-tab') === targetAttributeValue) {

                item.classList.remove("bg-white", "text-blue-600");
                item.classList.add("text-white", "bg-blue-600");
            } else {
                item.classList.add("bg-white", "text-blue-600");
                item.classList.remove("text-white", "bg-blue-600");
            }
        }

        if (!carTypeTabContent) {
            return;
        }

        var data = [];
        var content = "";

        if (targetAttributeValue === "savari") {

            //fetchData
            data = [
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" },
                { url: "#", logo: "./src/images/brands/logo(4).png", alt: "nissan" }
            ]

        } else if (targetAttributeValue === "sangin") {

            // fetchData
            data = [
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
                { url: "#", logo: "./src/images/brands/daf.png", alt: "DAF" },
            ]

        }

        for (var k = 0; k < data?.length; k++) {
            content += '<a href="' + data[k].url + '" class="brands-accordion-item w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl p-3 flex justify-center items-center aspect-square group"><img src="' + data[k].logo + '" alt="' + data[k].alt + '" class="w-10 h-10 md:w-14 md:h-14 object-center object-contain group-hover:scale-105 transition-all" /></a>'
        }

        carTypeTabContent.innerHTML = content;

    })
}
// END ----- car type tab;



document.addEventListener('DOMContentLoaded', function () {

    var promotionSplide = new Splide('.promotion-splide', {
        direction: 'ttb',
        gap: '2rem',
        arrows: false,
        height: '370px',
        wheel: true,
        breakpoints: {
            767: {
                direction: 'rtl',
                height: 'auto',
                pagination: false
            },
            1023:{
                height: '330px',
                gap: '.5rem'
            }
        },
    });
    promotionSplide.mount();


    var productsSplide = new Splide('.producrs-splide', {
        pagination: false,
        perPage: 4,
        type: 'loop',
        breakpoints: {
            550: {
                perPage: 1,
                padding: { left: '30%'}
            },
            767:{
                arrows: false,
            },
            1023:{
                perPage: 2
            },
            1279:{
                perPage: 3,
                gap: '10px'
            }

        },
        direction: 'rtl',
        perMove: 1,
        gap: '1.5rem'
    });
    productsSplide.mount();


    var topBrandsSplide = new Splide('.top-brands-splide', {
        pagination: false,
        type: 'loop',
        perPage: 4,
        breakpoints: {
            450: {
                perPage: 2,
                padding: { left: '60px'}
            },
            600: {
                perPage: 3,
                padding: { left: '60px'}
            },
            767:{
                perPage: 3,
                arrows: false,
                padding: { left: '50px'}
            },
            1279:{
                perPage: 3,
                gap: '10px'
            }
        },
        direction: 'rtl',
        perMove: 1,
        gap: '1.5rem'
    });
    topBrandsSplide.mount();


    var newsSplide = new Splide('.news-splide', {
        pagination: false,
        perPage: 3,
        type: 'loop',
        breakpoints: {
            600: {
                perPage: 1,
                padding: { left: 30},
                arrows: false
            },
            767:{
                padding: { left: 40},
                gap: '10px',
                arrows: false
            },
            1200: {
                perPage: 2
            },
        },
        direction: 'rtl',
        perMove: 1,
        gap: '1.5rem'
    });
    newsSplide.mount();

    var productCategorySplide = new Splide ('.product-category-splide',{
        pagination: true,
        perPage: 2,
        direction: 'rtl',
        perMove: 1,
        gap: '10px',
        arrows:false,
        autoplay: 'play',
        interval:2000,
        type: 'loop',
        breakpoints: {
            639: {
                perPage: 1
            }
        }
    });
    productCategorySplide.mount();


});