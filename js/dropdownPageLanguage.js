const languageChoice = document.getElementsByClassName("languageChoice");
const languageChosenSVG = document.querySelector(".languageChosenSVG");
const languageSwitcherArrow = document.querySelector(".languageSwitcherArrow");
const languageSwitcherArrowPath = document.querySelector(".languageSwitcherArrowPath");
const pageLanguage = document.querySelector(".pageLanguage")
const languageOptions = document.querySelector(".languageOptions");

document.addEventListener("click", function(event) {    
    if (languageOptions.style.height === "fit-content"){
        if (!event.target.matches(".languageOptions")) {
            dropdownClose()
        }
    }
    else{
        if (event.target.matches(".languageSwitcherArrow") || event.target.matches(".languageSwitcherArrowPath") || event.target.matches(".pageLanguage")) {
            dropdownOpen()          
        }
    }
})
function dropdownOpen() {
    languageOptions.style.height = "fit-content";
    languageOptions.style.padding = "12px 0 5px 0";
    languageOptions.style.boxShadow = "0 8px 16px 0 rgba(0, 0, 0, 0.1)";
    languageOptions.style.opacity = "1";
    for (let i = 0; i < languageChoice.length; i++) {
        languageChoice[i].style.fontSize = "14px";
        languageChoice[i].style.margin = "8px 0 14px 0";
        languageChoice[i].style.opacity = "1";
    }
    languageChosenSVG.style.height = "21px";
    languageChosenSVG.style.margin = "7px 0 6px 0";
    languageChosenSVG.style.opacity = "1";
    languageSwitcherArrow.style.transform = "rotate(180deg)";
}
function dropdownClose() {
    languageOptions.style.height = "0";
    languageOptions.style.padding = "0";
    languageOptions.style.boxShadow = "none";
    languageOptions.style.opacity = "0";
    for (let i = 0; i < languageChoice.length; i++) {
        languageChoice[i].style.fontSize = "0px";
        languageChoice[i].style.margin = "0px";
        languageChoice[i].style.opacity = "0";
    }
    languageChosenSVG.style.height = "0";
    languageChosenSVG.style.minHeight = "0";
    languageChosenSVG.style.margin = "0";
    languageChosenSVG.style.opacity = "0";
    languageSwitcherArrow.style.transform = "rotate(0deg)";
}