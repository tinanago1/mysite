// HTML elemental <====
const inputSearch = document.querySelector(".L-header_formWrap_form_search");
const searchIcon = document.querySelector(".L-header_formWrap_searchIcon_img");
const menuButton = document.querySelector(".L-header_mobileMenuContainer");
const mobileMenu = document.querySelector(".mobileMenu");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const menuClose = document.querySelector(".mobile-menu_close");


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
        mobileMenu.classList.add("mobileMenuOn");
        body.classList.toggle("bodyNotScroll");
        container.classList.add("menuOnContainer");
        container.classList.add("bodyNotClick")
    })
}

const menuCloseSwitch = () => {
    menuClose.addEventListener("click", () => {
        mobileMenu.classList.toggle("mobileMenuOn");
        body.classList.toggle("bodyNotScroll");
        container.classList.remove("menuOnContainer");
        container.classList.remove("bodyNotClick");
    })
}

menuSwitch();
menuCloseSwitch();
// mobileMenu ==>