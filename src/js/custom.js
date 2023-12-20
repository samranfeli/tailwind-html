//set as current vehicle when click on saved vehicle:
document.getElementById("saved_vehicles_wrapper")?.addEventListener("click", e => {
    var savedVehicleItem = e.target.closest("[data-saved-vehicle-id]");
    if (savedVehicleItem){
        var id = savedVehicleItem.getAttribute("data-saved-vehicle-id");
        var title = savedVehicleItem.getAttribute("data-saved-vehicle-title");
        
        //update current vehicle in cookie
        var newItem = {id:id, title:title};
        document.cookie = "currentVehicle=" + JSON.stringify(newItem);
        //add current vehicle to modal:
        var currentVehicleWrapper = document.getElementById("current_vehicle_wrapper");
        if (title && currentVehicleWrapper){
            currentVehicleWrapper.innerHTML = '<h5 class="font-semibold mb-4 text-sm">در حال خرید برای</h5><div class="shadow flex gap-4 items-center rounded-md border-s-4 border-orange-600 p-4"><div class="relative grow-0 shrink-0 flex items-center justify-center"><svg class="w-8 h-8 fill-neutral-600" viewBox="0 -960 960 960"><path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-12.75 0-21.375-8.625T759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm82.765 220Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Z"/></svg><svg class="fill-green-600 w-5 h-5 absolute -top-2 -right-1" viewBox="0 -960 960 960"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/></svg></div><div>'
            + title +
            '</div></div><div><button type="button" class="text-xs my-4 text-blue-600" onclick="cancelCurrentVehicle();">خرید مستقل از خودرو</button></div>';

            //remove this item from saved vehicle list in modal:
            savedVehicleItem.parentNode.removeChild( savedVehicleItem );
        }        
    }
});


function cancelCurrentVehicle(){
    document.cookie = "currentVehicle=";
    var wrapper = document.getElementById("current_vehicle_wrapper");
    if(wrapper){
        wrapper.innerHTML = "";
    } 
}


function closeAddVehicleModal() {
    var modal = document.getElementById("add_vehicle_modal");
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';

    unlockBodyScroll();

}

function openAddVehicleModal() {
    //start add selected vehicle and saved vehicles:
    //current vehicle:
    var currentVehicle = document.cookie.split("currentVehicle=")[1]?.split(";")[0];
    var currentVehicleWrapper = document.getElementById("current_vehicle_wrapper");
    var currentVehicleTitle;
    if (currentVehicle && currentVehicleWrapper){
        currentVehicleTitle = JSON.parse(currentVehicle)?.title;
        currentVehicleWrapper.innerHTML = '<h5 class="font-semibold mb-4 text-sm">در حال خرید برای</h5><div class="shadow flex gap-4 items-center rounded-md border-s-4 border-orange-600 p-4"><div class="relative grow-0 shrink-0 flex items-center justify-center"><svg class="w-8 h-8 fill-neutral-600" viewBox="0 -960 960 960"><path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-12.75 0-21.375-8.625T759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm82.765 220Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Z"/></svg><svg class="fill-green-600 w-5 h-5 absolute -top-2 -right-1" viewBox="0 -960 960 960"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/></svg></div><div>'
        + currentVehicleTitle +
        '</div></div><div><button type="button" class="text-xs my-4 text-blue-600" onclick="cancelCurrentVehicle();">خرید مستقل از خودرو</button></div>';
    }

    //saved vehicles:
    var savedItemsCookie = document.cookie.split("savedVehicle=")[1]?.split(";")[0];
    if (savedItemsCookie){
        var cookieItems = JSON.parse(savedItemsCookie)?.filter(item => !currentVehicleTitle || item.title !== currentVehicleTitle );
        var savedVehiclesElement ="";
        for (var i=0; i<cookieItems.length ; i++ ){
            savedVehiclesElement += '<div data-saved-vehicle-id="'
            + cookieItems[i].id +
            '" data-saved-vehicle-title="'
            + cookieItems[i].title +
            '" class="cursor-pointer transition-all hover:shadow-md hover:bg-neutral-100 shadow flex gap-4 items-center rounded-md border-s-4 border-neutral-300 p-4 mb-4"><div class="relative grow-0 shrink-0 flex items-center justify-center"><svg class="w-8 h-8 fill-neutral-600" viewBox="0 -960 960 960"><path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-12.75 0-21.375-8.625T759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm82.765 220Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Z"/></svg></div><div>' 
            + cookieItems[i].title +
            '</div></div>';
        }
        if (savedVehiclesElement){
            savedVehiclesElement = '<h5 class="font-semibold mb-4 text-sm"> خودروهای ذخیره شده شما </h5>' + savedVehiclesElement ;
            var savedItemsWrapper = document.getElementById("saved_vehicles_wrapper");
            if (savedItemsWrapper){
                savedItemsWrapper.innerHTML = savedVehiclesElement;
            }
        }
    }
    //end add selected vehicle and saved vehicles:

    //open modal
    var modal = document.getElementById("add_vehicle_modal");
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';

    lockBodyScroll();
}

//add years options:
document.addEventListener('DOMContentLoaded', function () {
    var yearOptionsWrapper = document.querySelector('[data-select-options="add-vehicle-year"]');
    var minYear = 1930;
    var maxYear = new Date().getFullYear();
    var optionsHtml ="";
    for (var i=maxYear; i >= minYear ; i--){
        optionsHtml += "<div  data-option-value='" + i + "' class='p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px' > "+ i + "</div>"
    }
    yearOptionsWrapper.innerHTML = optionsHtml;    
});

//add select options action:
document.getElementById("add_vehicle")?.addEventListener('click', async(e) => {
    var optionValue = e.target.getAttribute("data-option-value");
    var select = e.target.closest("[data-addVehicle-Select]");
    var selectType = select.getAttribute("data-addVehicle-Select");
    var input = select?.querySelector(".add-vehicle-input");
    if (optionValue && input){
        var optionText = e.target.innerText;
        input.value = optionText;

        function clearSelect(wrapper){
            var selectInput = wrapper.querySelector(".add-vehicle-input");
            var selectOptionsWrapper = wrapper.querySelector("[data-select-options]");

            if(selectInput && selectOptionsWrapper){
                selectInput.value = "";
                selectInput.disabled = true;
                selectOptionsWrapper.innerHTML = "";        
            } 
        }

        function fillOptionsAndEnable(wrapper,type){
            var optionElement = ""
            var selectInput = wrapper.querySelector(".add-vehicle-input");
            var selectOptionsWrapper = wrapper.querySelector("[data-select-options]");
            var data = [];

            if (select && selectOptionsWrapper){

                //fetch ajax data based on type:
                switch (type){
                    case "make":
                        //fetch data make:
                        data = [
                            {value:"toyota",title:"تویوتا (109)"},
                            {value:"hundai",title:"هیوندا (60) "},
                            {value:"nissan",title:"نیسان (53) "},
                            {value:"mazda",title:"مزدا (230) "},
                            {value:"hundai",title:"هیوندا (60) "},
                            {value:"nissan",title:"نیسان (53) "},
                            {value:"mazda",title:"مزدا (230) "},
                            {value:"hundai",title:"هیوندا (60) "},
                            {value:"nissan",title:"نیسان (53) "},
                            {value:"mazda",title:"مزدا (230) "}
                        ];    
                        break;
                    case "model":
                        //fetch data model:
                        data = [
                            {value:"model1",title:"model 1"},
                            {value:"model2",title:"model 2"},
                            {value:"model3",title:"model 3"},
                            {value:"model4",title:"model 4"},
                            {value:"model5",title:"model 5"},
                            {value:"model6",title:"model 6"},
                            {value:"model7",title:"model 7"},
                        ];
                        break;
                    case "engine":
                        //fetch data engine:
                        data = [
                            {value:"engine1",title:"engine 1"},
                            {value:"engine2",title:"engine 2"},
                            {value:"engine3",title:"engine 3"},
                            {value:"engine4",title:"engine 4"},
                            {value:"engine5",title:"engine 5"}
                        ];
                        break;
                    default:
                }

                for(var k=0; k < data.length ; k++){
                    optionElement += '<div data-option-value="'+ data[k].value + '" class="p-2 cursor-pointer rounded-md hover:bg-neutral-50 mb-px" >'+ data[k].title + '</div>';
                }

                selectOptionsWrapper.innerHTML = optionElement;
                selectInput.disabled = false;
            }

        }

        var makeSelectWrapper = document.querySelector("[data-addVehicle-Select='add-vehicle-make']");        
        var modelSelectWrapper = document.querySelector("[data-addVehicle-Select='add-vehicle-model']");
        var enginSelectWrapper = document.querySelector("[data-addVehicle-Select='add-vehicle-engine']");

        switch(selectType){
            
            case "add-vehicle-year":

                clearSelect(makeSelectWrapper);
                clearSelect(modelSelectWrapper);
                clearSelect(enginSelectWrapper);

                fillOptionsAndEnable(makeSelectWrapper, "make");

                break;

            case "add-vehicle-make":

                clearSelect(modelSelectWrapper);
                clearSelect(enginSelectWrapper);

                fillOptionsAndEnable(modelSelectWrapper, "model");
                
                break;

            case "add-vehicle-model":

                clearSelect(enginSelectWrapper);

                fillOptionsAndEnable(enginSelectWrapper, "engine");

                break;
            case "add-vehicle-engine":

                clearSelect(makeSelectWrapper);
                clearSelect(modelSelectWrapper);
                clearSelect(enginSelectWrapper);
                document.getElementById("add_vehicle_year").value="";
                
                //update current vehicle in cookie
                var newItem = {id:optionValue, title:optionText};
                document.cookie = "currentVehicle=" + JSON.stringify(newItem);
                //add current vehicle to modal:
                var currentVehicleWrapper = document.getElementById("current_vehicle_wrapper");
                if (optionText && currentVehicleWrapper){
                    currentVehicleWrapper.innerHTML = '<h5 class="font-semibold mb-4 text-sm">در حال خرید برای</h5><div class="shadow flex gap-4 items-center rounded-md border-s-4 border-orange-600 p-4"><div class="relative grow-0 shrink-0 flex items-center justify-center"><svg class="w-8 h-8 fill-neutral-600" viewBox="0 -960 960 960"><path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-12.75 0-21.375-8.625T759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm82.765 220Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Z"/></svg><svg class="fill-green-600 w-5 h-5 absolute -top-2 -right-1" viewBox="0 -960 960 960"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z"/></svg></div><div>'
                    + optionText +
                    '</div></div><div><button type="button" class="text-xs my-4 text-blue-600" onclick="cancelCurrentVehicle();">خرید مستقل از خودرو</button></div>';
                }
            

                //saved vehicles:
                var savedItemsCookie = document.cookie.split("savedVehicle=")[1]?.split(";")[0];
                if (savedItemsCookie){
                    var currntItems = JSON.parse(savedItemsCookie);

                    if (!currntItems.find(x => x.title === optionText)){
                        currntItems.unshift(newItem);
                    }
                    
                    //update saved vehicles in cookie
                    document.cookie = "savedVehicle=" + JSON.stringify(currntItems);
                    //add saved vehicles to modal:
                    var updatedCookieItems = currntItems.filter(item => item.title !== optionText );
                    var savedVehiclesElement ="";
                    for (var i=0; i<updatedCookieItems.length ; i++ ){
                        savedVehiclesElement += '<div data-saved-vehicle-id="'
                        + updatedCookieItems[i].id +
                        '" data-saved-vehicle-title="'
                        + updatedCookieItems[i].title +
                        '" class="cursor-pointer transition-all hover:shadow-md hover:bg-neutral-100 shadow flex gap-4 items-center rounded-md border-s-4 border-neutral-300 p-4 mb-4"><div class="relative grow-0 shrink-0 flex items-center justify-center"><svg class="w-8 h-8 fill-neutral-600" viewBox="0 -960 960 960"><path d="M200-204v54q0 12.75-8.625 21.375T170-120h-20q-12.75 0-21.375-8.625T120-150v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.625 21.375T810-120h-21q-12.75 0-21.375-8.625T759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm82.765 220Q309-314 324.5-329.75T340-368q0-23.333-15.75-39.667Q308.5-424 286-424q-23.333 0-39.667 16.265Q230-391.471 230-368.235 230-345 246.265-329.5q16.264 15.5 39.5 15.5ZM675-314q23.333 0 39.667-15.75Q731-345.5 731-368q0-23.333-16.265-39.667Q698.471-424 675.235-424 652-424 636.5-407.735q-15.5 16.264-15.5 39.5Q621-345 636.75-329.5T675-314Z"/></svg></div><div>' 
                        + updatedCookieItems[i].title +
                        '</div></div>';
                    }
                    if (savedVehiclesElement){
                        savedVehiclesElement = '<h5 class="font-semibold mb-4 text-sm"> خودروهای ذخیره شده شما </h5>' + savedVehiclesElement ;
                        var savedItemsWrapper = document.getElementById("saved_vehicles_wrapper");
                        if (savedItemsWrapper){
                            savedItemsWrapper.innerHTML = savedVehiclesElement;
                        }
                    }
                }else{
                    //update saved vehicles in cookie
                    document.cookie = "savedVehicle=" + JSON.stringify([newItem]);
                }

                break;
            default:
                console.log("default")
        }
    }

});


//start general tabs:
var tabButtons = document.querySelectorAll('[data-tab-href]');
for(var i = 0 ; i < tabButtons.length ; i++){
    tabButtons[i].addEventListener('click', e => {
        
        var button = e.target.closest("[data-tab-href]");

        var buttonAttributeValue = button.getAttribute("data-tab-href");

        for(var j=0; j < tabButtons.length ; j++ ){
            var itemAttributeValue = tabButtons[j].getAttribute("data-tab-href");
            if (itemAttributeValue === buttonAttributeValue){
                tabButtons[j].classList.add("border-orange-600");
                tabButtons[j].classList.remove("border-transparent");
            }else{
                tabButtons[j].classList.remove("border-orange-600");
                tabButtons[j].classList.add("border-transparent");
            }
        }

        var tabContents = e.target.closest('[data-tabs-holder]')?.querySelectorAll('[data-tab-id]');
        if (tabContents && tabContents.length){
            for(var j=0; j < tabContents.length ; j++ ){
                var itemAttributeValue = tabContents[j].getAttribute("data-tab-id");
                if (itemAttributeValue === buttonAttributeValue){
                    tabContents[j].classList.remove("hidden");
                }else{
                    tabContents[j].classList.add("hidden");
                }
            } 
        }

    });
}

//end general tabs:

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


// START MOBILE BOTTOM NAV
var mobileBottomNavLinks = document.querySelectorAll('[data-mobile-bottom-nav]');
for(var i = 0 ; i < mobileBottomNavLinks.length ; i++){
    mobileBottomNavLinks[i].addEventListener('click', e => {
        
        var button = e.target.closest("[data-mobile-bottom-nav]");
        var buttonAttributeValue = button.getAttribute("data-mobile-bottom-nav");

        for(var j=0; j < mobileBottomNavLinks.length ; j++ ){
            var itemAttributeValue = mobileBottomNavLinks[j].getAttribute("data-mobile-bottom-nav");
            if (itemAttributeValue === buttonAttributeValue){
                mobileBottomNavLinks[j].classList.add("text-blue-700");
            }else{
                mobileBottomNavLinks[j].classList.remove("text-blue-700");
            }
        }

        if (buttonAttributeValue === "categories"){
            openCategiries();
        }
    });
}

function openCategiries(){
    var categoriesMenu = document.getElementById('categories_menu');
    
    if(!categoriesMenu){ return }
    
    categoriesMenu.classList.add('opacity-100', 'visible');
    categoriesMenu.classList.remove('opacity-0', 'invisible');
}


function closeCategiries(){
    var categoriesMenu = document.getElementById('categories_menu');
    
    if(!categoriesMenu){ return }
    
    categoriesMenu.classList.remove('opacity-100', 'visible');
    categoriesMenu.classList.add('opacity-0', 'invisible');
    unlockBodyScroll();
}

// END MOBILE BOTTOM NAV


////////////////// START ----- CATEGORIES ///////////////////////

// START ---- ToggleCategories
function toggleCategoriesWrapper(){
    
    var categoriesMenu = document.getElementById('categories_menu');
    if (!categoriesMenu) return;

    categoriesMenu.classList.add('opacity-0', 'invisible');
    categoriesMenu.classList.remove('opacity-100', 'visible');

    var toggleCategoriesButtons = document.querySelectorAll('[data-categories-button]');
    var openCategoriesButtons = document.querySelectorAll('[data-categories-open-button]');
    var closeCategoriesButtons = document.querySelectorAll('[data-categories-close-button]');
    
    if (window.innerWidth < 1024){

        for(let i = 0 ; i < toggleCategoriesButtons.length ; i++){  
            toggleCategoriesButtons[i].addEventListener("click", (e) => {
                categoriesMenu.classList.add('opacity-100', 'visible');
                categoriesMenu.classList.remove('opacity-0', 'invisible');
            });
        } 

        for(let i = 0 ; i < openCategoriesButtons.length ; i++){              
            openCategoriesButtons[i].addEventListener("click", () => {
                categoriesMenu.classList.add('opacity-100', 'visible');
                categoriesMenu.classList.remove('opacity-0', 'invisible');
            });
        } 

        for(let i = 0 ; i < closeCategoriesButtons.length ; i++){
            closeCategoriesButtons[i].addEventListener("click", () => {
                categoriesMenu.classList.remove('opacity-100', 'visible');
                categoriesMenu.classList.add('opacity-0', 'invisible');
                unlockBodyScroll();
            });

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
document.getElementById("car_filter")?.addEventListener('click', e => {
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
        input.removeAttribute('disabled');
    }
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



document.addEventListener('DOMContentLoaded', function () {
    var loading = document.getElementById('site-loading');
    
    if (!loading) return;

    loading.classList.add("invisible","opacity-0");
    loading.classList.remove("visible","opacity-100");
})