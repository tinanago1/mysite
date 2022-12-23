const inputSearch = document.querySelector(".L-header_formWrap_form_search");
const searchIcon = document.querySelector(".L-header_formWrap_searchIcon_img");

inputSearch.addEventListener("focus", () => {

    searchIcon.classList.add("addClass");
});

inputSearch.addEventListener("focusout", () => {

    searchIcon.classList.remove("addClass");
    
});

