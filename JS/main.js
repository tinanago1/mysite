// HTML elemental <====
const inputSearch = document.querySelector(".L-header_formWrap_form_search");
const searchIcon = document.querySelector(".L-header_formWrap_searchIcon_img");
const menuButton = document.querySelector(".mobileMenuContainer");
const container = document.querySelector("#globalContainer");

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

const menuSwitch = () => {
    menuButton.addEventListener("click", () => {
        container.classList.toggle("menu-on-of");
        
    })
}

menuSwitch();



