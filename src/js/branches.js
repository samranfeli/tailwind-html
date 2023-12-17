//carousel:
document.addEventListener('DOMContentLoaded', function () {

    var brancheSplide = new Splide('.branches-splide', {
        pagination: true,
        arrows: false,
        perPage: 2,
        type: 'loop',
        direction: 'rtl',
        perMove: 1,
        gap: '1.5rem',
        breakpoints: {
                768: {
                    perPage: 1
                }
            },
    });
    brancheSplide.mount();

});



//map
var map = L.map('map').setView([35.766225, 51.442329], 14);

var myIcon = L.icon({
    iconUrl: '/src/images/icons/marker.png',
    iconSize: [48, 69],
    iconAnchor: [24, 65]
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([35.766225, 51.442329] ,{icon: myIcon}).addTo(map);
var marker = L.marker([35.756225, 51.432329], {icon: myIcon}).addTo(map);