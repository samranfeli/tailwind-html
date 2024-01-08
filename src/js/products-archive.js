function initialize(){
    ShowOnlyFirstModelsRow();
    ShowOnlyFirstBrandsRow();
}

window.onload = initialize;
window.onresize = initialize;

// Models Accordion
var modelToggleBtn = document.getElementById("model_toggle-btn");
var modelToggleBtnIcon = modelToggleBtn.querySelector("svg");
var modelToggleContent = document.getElementById("model_toggle-content");

function ShowOnlyFirstModelsRow (){
    var modelToggleItem = modelToggleContent.querySelector(".model-accordion-item");
    modelToggleContent.style.maxHeight = modelToggleItem.offsetHeight + "px";
    modelToggleContent.classList.remove("active");
    if(modelToggleBtnIcon){
        modelToggleBtnIcon.style.transform = "rotate(0)";
    }
}
function ShowAllModels (){
    modelToggleContent.classList.add("active");
    modelToggleContent.style.maxHeight = modelToggleContent.scrollHeight + "px";
    if(modelToggleBtnIcon){
        modelToggleBtnIcon.style.transform = "rotate(180deg)";
    }
}

modelToggleBtn.addEventListener('click', (e) => {
    if (modelToggleContent.classList.contains("active")) {
        ShowOnlyFirstModelsRow();
    } else {
        ShowAllModels()
    } 
});
// END ---- Brands Accordion


// Brands Accordion
var brandsToggleBtn = document.getElementById("brand_toggle-btn");
var brandsToggleBtnIcon = brandsToggleBtn.querySelector("svg");
var brandsToggleContent = document.getElementById("brand_toggle-content");

function ShowOnlyFirstBrandsRow (){
    var brandsToggleItem = brandsToggleContent.querySelector(".brands-accordion-item");
    brandsToggleContent.style.maxHeight = brandsToggleItem.offsetHeight + "px";
    brandsToggleContent.classList.remove("active");
    if(brandsToggleBtnIcon){
        brandsToggleBtnIcon.style.transform = "rotate(0)";
    }
}
function ShowAllBrands (){
    brandsToggleContent.classList.add("active");
    brandsToggleContent.style.maxHeight = brandsToggleContent.scrollHeight + "px";
    if(brandsToggleBtnIcon){
        brandsToggleBtnIcon.style.transform = "rotate(180deg)";
    }
}

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
for(var i = 0 ; i < carTypeTabs.length ; i++){  
    carTypeTabs[i].addEventListener("click", e => {
        var targetAttributeValue = e.target.closest("button").getAttribute('data-car-type-tab');
        var carTypeTabContent = document.querySelector('[data-car-type-content]');
        
        for(var j = 0 ; j < carTypeTabs.length ; j++){
            var item = carTypeTabs[j];
            if (item.getAttribute('data-car-type-tab') === targetAttributeValue){
                
                item.classList.remove("bg-white","text-blue-600");
                item.classList.add("text-white","bg-blue-600");
            }else{
                item.classList.add("bg-white","text-blue-600");
                item.classList.remove("text-white","bg-blue-600");
            }
        }

        if (!carTypeTabContent){
            return;
        }

        var data = [];
        var content = "";

        if(targetAttributeValue === "savari"){
            
            //fetchData
            data = [
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"},
                {url:"#",logo:"./src/images/brands/logo(4).png",alt:"nissan"}
            ]

        }else if(targetAttributeValue === "sangin"){
            
            // fetchData
            data = [
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
                {url:"#",logo:"./src/images/brands/daf.png",alt:"DAF"},
            ]

        }

        for(var k=0; k < data?.length ; k++){
            content += '<a href="'+data[k].url+'" class="brands-accordion-item w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-xl p-3 flex justify-center items-center aspect-square group"><img src="'+data[k].logo+'" alt="'+data[k].alt+'" class="w-10 h-10 md:w-14 md:h-14 object-center object-contain group-hover:scale-105 transition-all" /></a>';
        }

        carTypeTabContent.innerHTML = content;
        
    })
}
// END ----- car type tab;

//Start responsive sidebar filter:
function openSideBar(){
    var sideBar = document.getElementById("sideBarWrapper");
    var sideBarBackdrop = document.getElementById("sidebarBackDrop");
    var mainContent = document.getElementById("main_content");
    
    if(!sideBar || !sideBarBackdrop || !mainContent ){
        return;
    }
        
    if (window.innerWidth < 768){
        
        lockBodyScroll();
        
        sideBar.classList.remove("max-md:translate-x-full");
        sideBarBackdrop.classList.remove("hidden");
        if (mainContent.classList.contains("z-10")){
            mainContent.classList.remove("z-10");
        }
        if (!mainContent.classList.contains("z-20")){
            mainContent.classList.add("z-20");
        }
    }
}

function closeSideBar() {
    var sideBar = document.getElementById("sideBarWrapper");
    var sideBarBackdrop = document.getElementById("sidebarBackDrop");
    var mainContent = document.getElementById("main_content");
    
    if(!sideBar || !sideBarBackdrop || !mainContent ){
        return;
    }
    
    if (window.innerWidth < 768){

        unlockBodyScroll();
        
        if(!sideBar.classList.contains("max-md:translate-x-full")){
            sideBar.classList.add("max-md:translate-x-full");
        }
        if(!sideBarBackdrop.classList.contains("hidden")){
            sideBarBackdrop.classList.add("hidden");
        }

        if (!mainContent.classList.contains("z-10")){
            mainContent.classList.add("z-10");
        }
        if (mainContent.classList.contains("z-20")){
            mainContent.classList.remove("z-20");
        }
    }
}
//End responsive sidebar filter: