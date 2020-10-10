const select = document.querySelector("select");

const COUNTRY_LS = 'country' ;

function handleChange(event) {
    const currentCountry = event.target.value;
    saveCountry(currentCountry);
}

function saveCountry (country) {
    localStorage.setItem(COUNTRY_LS, country);
}

function loadCountry () {
    const country = localStorage.getItem(COUNTRY_LS);
    if(country !== null) {

    } 
}

function init() {
    loadCountry();
    select.addEventListener("change", handleChange);
}

init();