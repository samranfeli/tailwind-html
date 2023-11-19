
//Lock body scrollabilty:
var body = document.getElementById('body');
function lockBodyScroll() {
    body.classList.add('h-screen', 'overflow-hidden');
}
function unlockBodyScroll() {
    body.classList.remove('h-screen', 'overflow-hidden');
}
// END ---- Lock body scrollabilty    



//Mobile menu:
var mobileMenu = document.getElementById('mobile_menu');
var mobileMenuOverlay = document.getElementById('mobile_menu_overlay');
function openMobileMenu() {
    mobileMenu.classList.remove('-translate-x-full');
    mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
    lockBodyScroll();
}
function closeMobileMenu() {
    mobileMenu.classList.add('-translate-x-full');
    mobileMenuOverlay.classList.add('opacity-0', 'invisible');
    unlockBodyScroll();
}
// END ---- Mobile menu:



//ToggleCategories
var categoriesMenu = document.getElementById('categories_menu');
var categoriesBtn = document.getElementById('categories_button');
function toggleCategories() {
    if (categoriesMenu.classList.contains('opacity-0')) {
        categoriesMenu.classList.add('opacity-100', 'visible', 'mt-0');
        categoriesMenu.classList.remove('opacity-0', 'invisible', 'mt-5');
    } else {
        categoriesMenu.classList.add('opacity-0', 'invisible', 'mt-5');
        categoriesMenu.classList.remove('opacity-100', 'visible', 'mt-0');
    }
}
document.addEventListener('click', event => {
    const isClickOutsideCategoriesBtn = !categoriesBtn.contains(event.target);
    const isClickOutsideCategoriesMenu = !categoriesMenu.contains(event.target);
    if (isClickOutsideCategoriesBtn && isClickOutsideCategoriesMenu) {
        categoriesMenu.classList.add('opacity-0', 'invisible', 'mt-5');
        categoriesMenu.classList.remove('opacity-100', 'visible', 'mt-0');
    }
});
// END ---- ToggleCategories



//Search
var searchList = document.getElementById('search_list');
var searchListWrapper = document.getElementById('search_list_wrapper');
function search(value) {

    if (value.length > 2) {

        var autocompleteList = [
            {
                value: "tax_product_cat",
                type: "headline"
            },
            {
                term_id: "9668",
                taxonomy: "product_cat",
                value: "لنت ترمز",
                url: "https://www.radiscar.com/pcat/brake-system/brake-pad/",
                image_src: "",
                breadcrumbs: "سیستم ترمز",
                count: "270",
                type: "taxonomy",
                score: 21.333333333333332
            },
            {
                term_id: "9669",
                taxonomy: "product_cat",
                value: "دیسک ترمز",
                url: "https://www.radiscar.com/pcat/brake-system/brake-disc/",
                image_src: "",
                breadcrumbs: "سیستم ترمز",
                count: "92",
                type: "taxonomy",
                score: 19.753086419753085
            },
            {
                term_id: "9719",
                taxonomy: "product_cat",
                value: "کفشک ترمز",
                url: "https://www.radiscar.com/pcat/brake-system/brake-shoes/",
                image_src: "",
                breadcrumbs: "سیستم ترمز",
                count: "8",
                type: "taxonomy",
                score: 19.753086419753085
            },
            {
                value: "product",
                type: "headline"
            },
            {
                post_id: "19744",
                value: "لنت ترمز جلو 323 برند Textar کد 2127702",
                url: "https://www.radiscar.com/product/2127702/",
                thumb_html: "<img class='w-6 h-6' src=\"https://www.radiscar.com/wp-content/uploads/2023/03/2127702F-1-64x64.jpg?v=1678562207\">",
                price: "",
                desc: "",
                sku: "2127702",
                on_sale: false,
                featured: false,
                type: "product"
            },
            {
                post_id: "19995",
                value: "روغن ترمز Dot4،250cc برند Textar کد 95002100",
                url: "https://www.radiscar.com/product/95002100/",
                thumb_html: "<img class='w-6 h-6' src=\"https://www.radiscar.com/wp-content/uploads/2023/03/95002100-1-64x64.jpg?v=1679229437\">",
                price: "",
                desc: "",
                sku: "95002100",
                on_sale: false,
                featured: false,
                type: "product"
            },
            {
                post_id: "19851",
                value: "روغن ترمز Dot4LV،500cc برند Textar کد 95006100",
                url: "https://www.radiscar.com/product/95006100/",
                thumb_html: "<img class='w-6 h-6' src=\"https://www.radiscar.com/wp-content/uploads/2023/03/95006100-64x64.jpg?v=1678613001\">",
                price: "",
                desc: "",
                sku: "95006100",
                on_sale: false,
                featured: false,
                type: "product"
            },
            {
                post_id: "19808",
                value: "لنت ترمز جلو پژو 206 برند Textar کد 2359701",
                url: "https://www.radiscar.com/product/2359701/",
                thumb_html: "<img class='w-6 h-6' src=\"https://www.radiscar.com/wp-content/uploads/2023/03/2359701-1-64x64.jpg?v=1678599454\">",
                price: "",
                desc: "",
                sku: "2359701",
                on_sale: false,
                featured: false,
                type: "product"
            },
            {
                total: 381,
                type: "more_products"
            }
        ];


        var list = '';

        for (var i = 0; i < autocompleteList.length; i++) {

            var item = autocompleteList[i];

            switch (item.type) {


                case "headline":
                    var title = item.value;

                    if (item.value === 'tax_product_cat') {
                        title = 'دسته ها'
                    }
                    if (item.value === 'product') {
                        title = 'محصولات'
                    }

                    list += '<div class="pt-3 pb-1 border-b border-neutral-200 text-neutral-400" >' + title + '</div>';
                    break;

                case "taxonomy":
                    list += '<a href="' + item.url + '" class="p-2 pr-6 text-sm text-blue-600 hover:bg-neutral-100 cursor-pointer block" ><div>' + item.value + '</div><div class="text-xs text-neutral-400"> در ' + item.breadcrumbs + '</div></a>';
                    break;
                case "product":
                    list += '<a href="' + item.url + '" class="p-2 text-sm text-blue-600 hover:bg-neutral-100 cursor-pointer flex items-center gap-3" >' + item.thumb_html + '<span>' + item.value + '</span></a>';
                    break;
                case "more_products":
                    list += '<a href="/?s=' + value + '&post_type=product&dgwt_wcas=1" class="border-t border-neutral-200 p-2 pt-3 text-sm text-blue-600 cursor-pointer flex items-center gap-3" >مشاهده همه محصولات </a>';


                default:
                    continue;

            }

        }

        searchList.innerHTML = list;
        searchListWrapper.style.opacity = 1;
        searchListWrapper.style.visibility = 'visible';
        searchListWrapper.style.marginTop = '2px';

    } else {

        searchListWrapper.style.opacity = 0;
        searchListWrapper.style.visibility = 'hidden';
        searchListWrapper.style.marginTop = '';

        searchList.innerHTML = '';
    }

}
document.addEventListener("click", function (e) {
    const target = e.target.closest("[data-autocomplete-list]");
    if (target) {
        document.getElementById('searchInput').value = target.getAttribute('data-autocomplete-list');
    }
    searchListWrapper.style.opacity = 0;
    searchListWrapper.style.visibility = 'hidden';
    searchListWrapper.style.marginTop = '';
    searchList.innerHTML = '';
});
// END ---- Search



//Footer scroll to top:
function scrollToTop() {
    document.getElementsByTagName('body')[0].scrollIntoView({ behavior: "smooth" });
}
// END ---- Footer scroll to top:



//Price separator:
function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}
document.querySelectorAll('.price').forEach(element => {
    var value = element.innerHTML;
    element.innerHTML = numberWithCommas(value);
});
// END ---- Price separator:



//Display order modal:
function closeOrderModal() {
    var modal = document.getElementById("order_modal");
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';

    unlockBodyScroll();

}

function openOrderModal() {
    var modal = document.getElementById("order_modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';

    lockBodyScroll();
}
// END ---- Display order modal
