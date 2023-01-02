// HTML elemental <====
const inputSearch = document.querySelector(".L-header_formWrap_form_search");
const searchIcon = document.querySelector(".L-header_formWrap_searchIcon_img");
const menuButton = document.querySelector(".L-header_mobileMenuContainer");
const mobileMenu = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const container = document.querySelector(".container");

// HTML elemental ===>

// inputSearch <===
const clear = () => {

    inputSearch.addEventListener("focus", () => {
        searchIcon.classList.add("clearClass");
        inputSearch.setAttribute("id", "focusPadding");

        inputSearch.addEventListener("focusout", () => {
            searchIcon.classList.remove("clearClass");
            inputSearch.removeAttribute("id");
        })
    })
}

clear();
// inputSearch ===>

// mobileMenu ==>
const menuSwitch = () => {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("mobileMenuOn");

        if(mobileMenu.classList.contains("mobileMenuOn")) {
            body.style.cssText = "overflow: hidden;" 
            // container.style.cssText = "pointer-events: none;"
        } else {
            body.style.cssText = "overflow: scroll;"
        //     container.style.cssText = "pointer-events: initial;"
        }
    })
}
// mobileMenu ==>

menuSwitch();



