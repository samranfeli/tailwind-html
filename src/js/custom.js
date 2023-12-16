
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
    mobileMenu.classList.remove('-left-full');
    mobileMenu.classList.add('left-0');
    mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
    lockBodyScroll();
}
function closeMobileMenu() {
    mobileMenu.classList.add('-left-full');
    mobileMenu.classList.remove('left-0');
    mobileMenuOverlay.classList.add('opacity-0', 'invisible');
    unlockBodyScroll();
}
// END ---- Mobile menu:


////////////////// START ----- CATEGORIES ///////////////////////

// START ---- ToggleCategories
function toggleCategoriesWrapper(){
    
    var categoriesMenu = document.getElementById('categories_menu');
    categoriesMenu.classList.add('opacity-0', 'invisible');
    categoriesMenu.classList.remove('opacity-100', 'visible');

    var toggleCategoriesButtons = document.querySelectorAll('[data-categories-button]');
    if (window.innerWidth < 1024){
        for(let i = 0 ; i < toggleCategoriesButtons.length ; i++){  

            toggleCategoriesButtons[i].addEventListener("click", (e) => {
                if (categoriesMenu.classList.contains('opacity-0')) {
                    categoriesMenu.classList.add('opacity-100', 'visible');
                    categoriesMenu.classList.remove('opacity-0', 'invisible');
                } else {
                    categoriesMenu.classList.add('opacity-0', 'invisible');
                    categoriesMenu.classList.remove('opacity-100', 'visible');
                }
            })
        } 
    }
}
toggleCategoriesWrapper();
// END ---- ToggleCategories

//START ---- categories submenu tab
var categoryTabs = document.querySelectorAll('[data-category-link]');
var categoryTabContents = document.querySelectorAll('[data-category-content]');
function categoriesTabHandle(){
    for(let i = 0 ; i < categoryTabs.length ; i++){
    
        let eventType = "mouseenter";
        if (window.innerWidth < 1024){
            eventType = "click";
        }
        
        categoryTabs[i].addEventListener(eventType, (e) => {
    
            if (window.innerWidth < 1024){
                e.preventDefault();
            }
    
            var target = e.target;
            var targetAttribute = target.getAttribute("data-category-link");
    
            for(let k = 0 ; k < categoryTabs.length ; k++){
                categoryTabs[k]?.classList.remove("bg-white","text-red-600");            
            }
            target.classList.add("bg-white","text-red-600");
    
            for (let j = 0 ; j < categoryTabContents.length ; j++){
                var contentItem = categoryTabContents[j];
                if (contentItem){
                    var contentDataValue = contentItem.getAttribute("data-category-content");
                    if (contentDataValue === targetAttribute){
                        contentItem.classList.remove("hidden");
                    }else if (!contentItem.classList.contains("hidden")){
                        contentItem.classList.add("hidden");
                    }
                }
            }
    
        })
    }
}
categoriesTabHandle();
//END ---- categories submenu

//START ----- subCategory mobile toggle
function subCategoryHandle(){
    var categorymobileToggles = document.querySelectorAll('[data-subCategory-mobile-toggle]');
    for(let i = 0 ; i < categorymobileToggles.length ; i++){  
        categorymobileToggles[i].addEventListener("click", (e) => {
            if (window.innerWidth < 1024){
                e.preventDefault();
    
                var contentWrapper = e.target.nextElementSibling;
    
                if(contentWrapper.classList.contains("hidden")){
                    contentWrapper.classList.remove("hidden");
                    contentWrapper.classList.add("flex");
                }else{
                    contentWrapper.classList.add("hidden");
                    contentWrapper.classList.remove("flex");
                }
            }
        })
    }
}
subCategoryHandle();
//END ----- subCategory mobile toggle

window.addEventListener('resize', function() {
    categoriesTabHandle();
    subCategoryHandle();
    toggleCategoriesWrapper();
}, true);

////////////////// END ----- CATEGORIES ///////////////////////

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



//Accordion:
var accordions = document.querySelectorAll('[data-accordion]');
for(let i = 0 ; i < accordions.length ; i++){
    var accordionHeader = accordions[i];

    var accordionInitialState = accordionHeader.getAttribute("data-accordion");
    
    if (accordionInitialState === "open"){
        accordionHeader.nextElementSibling.style.maxHeight = "600px";
        accordionHeader.nextElementSibling.classList.remove("overflow-hidden");
    }else{
        accordionHeader.nextElementSibling.style.maxHeight = 0;
    }
        
    accordionHeader.addEventListener('click', (e) => {
        var accordionButton = e.target.closest('header');
        var state = accordionButton.getAttribute("data-accordion");
        var accordionContent = accordionButton.nextElementSibling;
        var axpandIcon = accordionButton.querySelector('svg');

        if (state === "open") {
            accordionContent.style.maxHeight = 0;
            accordionContent.classList.add('overflow-hidden');
            axpandIcon.classList.add('rotate-180');
            accordionButton.setAttribute("data-accordion","close");
          } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            axpandIcon.classList.remove('rotate-180');
            accordionButton.setAttribute("data-accordion","open");
            accordionContent.classList.remove('overflow-hidden');
          } 

    })
}
// END ---- Accordion:


//Accordion2:
var accordions = document.querySelectorAll('[data-accordion2]');
for(let i = 0 ; i < accordions.length ; i++){
    var accordionHeader = accordions[i];
    accordionHeader.addEventListener('click', (e) => {

        var header = e.target.closest('header');
        var accordionContent = header.nextElementSibling;
        var expandButton = header.querySelector('.expand-btn');
        var collapseButton = header.querySelector('.collapse-btn');

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            expandButton.classList.remove('hidden');
            collapseButton.classList.add('hidden'); 
            header.classList.remove('text-blue-600'); 

          } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            collapseButton.classList.remove('hidden');
            expandButton.classList.add('hidden'); 
            header.classList.add('text-blue-600');
            
          } 


    })
}
// END ---- Accordion2:



//Accordion3:
var accordions = document.querySelectorAll('[data-accordion3]');
for(let i = 0 ; i < accordions.length ; i++){
    var accordionHeader = accordions[i];
    accordionHeader.addEventListener('click', (e) => {

        var header = e.target.closest('header');
        var wrapper = e.target.closest('.accordion-wrapper');
        var accordionContent = header.nextElementSibling;
        var expandButton = header.querySelector('.expand-btn');
        var collapseButton = header.querySelector('.collapse-btn');

        if (accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = null;
            expandButton.classList.remove('hidden');
            collapseButton.classList.add('hidden'); 
            header.classList.remove('text-blue-600');  
            wrapper.classList.remove('bg-white',"border-white");
            wrapper.classList.add("border-neutral-200");

          } else {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            collapseButton.classList.remove('hidden');
            expandButton.classList.add('hidden'); 
            header.classList.add('text-blue-600');
            wrapper.classList.add('bg-white',"border-white");
            wrapper.classList.remove("border-neutral-200");
            
          } 

    })
}
// END ---- Accordion3:


//Toggle password visibility:
var togglePasswordBtns = document.querySelectorAll('[data-toggle-password]');
for(let i = 0 ; i < togglePasswordBtns.length ; i++){
    var togglePasswordBtn = togglePasswordBtns[i];
    togglePasswordBtn.addEventListener('click', (e) => {
        
        var toggleBtn = e.target.closest('[data-toggle-password]');
        var toggleInput = toggleBtn.closest('.relative').querySelector('input');
        var showPasswordIcon = toggleBtn.querySelector('.show-password');
        var hidePasswordIcon = toggleBtn.querySelector('.hide-password');

        if (toggleInput.getAttribute('type') === "password"){
            toggleInput.setAttribute('type','text');
            showPasswordIcon.classList.add('hidden');
            hidePasswordIcon.classList.remove('hidden');
        }else{
            toggleInput.setAttribute('type','password');
            hidePasswordIcon.classList.add('hidden');
            showPasswordIcon.classList.remove('hidden');
        }
        toggleInput.focus();

    })
}
// END ---- Toggle password visibility:




//Reset input:
var clearInputBtns = document.querySelectorAll('[data-clear-input]');
for(let i = 0 ; i < clearInputBtns.length ; i++){
    var clearInputBtn = clearInputBtns[i];
    clearInputBtn.addEventListener('click', (e) => {
        
        var button = e.target.closest('[data-clear-input]');
        var input = button.closest('.relative').querySelector('input');        

        if (input.value){
            input.value = "";
        }

        input.focus();
    })
}
// END ---- Reset input:




        //Products filter form:
        document.getElementById("car_filter").addEventListener('click', e => {
            var option = e.target.closest('[data-option-value]');
            if(option){
                var optionValue = option.getAttribute('data-option-value');
                var filterItemWrapper = e.target.closest('[data-filter-target]');
                var filterTarget =  filterItemWrapper.getAttribute("data-filter-target");
                var input = filterItemWrapper.querySelector('.filter-input');
                input.value = option.innerText;

                var url ="";
                if(filterTarget === "brand"){
                    url = 'fakeUrl.com/api/getBrands?country=' + optionValue;
                }else if (filterTarget === "model"){
                    url = 'fakeUrl.com/api/getBrands?brand=' + optionValue;
                }else if (filterTarget === "options"){
                    url = 'fakeUrl.com/api/getBrands?model=' + optionValue;
                }

                url="https://api.ganjoor.net/api/ganjoor/poets";
                
                fillSelectOptions(filterTarget , url);
            }
        });

        function fillSelectOptions(target,url){
            const xhttp = new XMLHttpRequest();

            var optionsWrapper = document.querySelector('[data-select-options="'+ target +'"]');
            var input = document.querySelector('[data-select-input="'+ target +'"]');
            
            if(input){
                input.value = 'در حال بارگذاری ...';
            }
            input.removeAttribute('disabled');
            xhttp.onload = function() {
    
                //based on response:
                if(target === 'brand'){
                    optionsWrapper.innerHTML = '<div data-option-value="toyota" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >تویوتا (109)</div><div data-option-value="hundai" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >هیوندا (60) </div><div data-option-value="nissan" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >نیسان (53) </div><div data-option-value="mazda" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >مزدا (230) </div><div data-option-value="hundai" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >هیوندا (60) </div><div data-option-value="nissan" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >نیسان (53) </div><div data-option-value="mazda" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >مزدا (230) </div><div data-option-value="hundai" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >هیوندا (60) </div><div data-option-value="nissan" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >نیسان (53) </div><div data-option-value="mazda" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >مزدا (230) </div>';
                }else if (target === 'model'){
                    optionsWrapper.innerHTML = '<div data-option-value="yaris" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >یاریس (109)</div><div data-option-value="prado" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >پرادو (60)</div><div data-option-value="ra4" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >رافور (53)</div>'
                } else if (target === "options"){
                    optionsWrapper.innerHTML = '<div data-option-value="GLI" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >GLI</div><div data-option-value="GLX" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >GLX</div>'                    
                }
                if(input){
                    input.value="";
                }
                //input.classList.remove('pointer-events-none','cursor-no-drop');
            }

            xhttp.open("GET", url);
            xhttp.send();
        }

        // END ---- products filter form
