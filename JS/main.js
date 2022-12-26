// HTML elemental <====
const inputSearch = document.querySelector(".L-header_formWrap_form_search");
const searchIcon = document.querySelector(".L-header_formWrap_searchIcon_img");
// HTML elemental ===>

const clear = el => {

    el.addEventListener("focus", () => {
        searchIcon.classList.add("clearClass");

        el.addEventListener("focusout", () => {
            searchIcon.classList.remove("clearClass");
        })
    })
}

clear(inputSearch);