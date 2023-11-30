let varLanguage = "";
let qr = "";
const fullnameInCard = document.getElementById("fullnameInCard");
const fullnameInput = document.getElementById("fullnameInput"); 
const emailInCard = document.getElementById("emailInCard");
const emailInput = document.getElementById("emailInput"); 
const positionInCard = document.getElementById("positionInCard");
const positionInput = document.getElementById("positionInput"); 
const additionalInfoInCard = document.getElementById("additionalInfoInCard");
const additionalInfoInput = document.getElementById("additionalInfoInput"); 
const workPhoneInCard = document.getElementById("workPhoneInCard");
const workPhoneInput = document.getElementById("workPhoneInput"); 
const mobilePhoneInCard = document.getElementById("mobilePhoneInCard");
const mobilePhoneInput = document.getElementById("mobilePhoneInput");
const generateCardButton = document.querySelector(".generateCardButton");
const qrDiv = document.getElementById("qrDiv");
const getQrButton = document.querySelector(".getQrButton");
const warningMessage = document.querySelector(".warningMessage");
const successMessageQR = document.querySelector(".successMessageQR");
const successMessageCard = document.querySelector(".successMessageCard");
const infoMessage = document.querySelector(".infoMessage");
const closingRemarkInCard = document.getElementById("closingRemarkInCard");
const corporationInCard = document.getElementById("corporationInCard");

//--------------------------------dropdown with enterprises options
const webPageInCard = document.getElementById("webPageInCard");
const dropdownInputLanguage = document.getElementById("dropdownInputLanguage");
const dropdownInputOrganization = document.getElementById("dropdownInputOrganization");
const dropdownArrowOrganization = document.getElementById("dropdownArrowOrganization");
const dropdownsInFormOrganization = document.getElementById("dropdownsInFormOrganization");
const dropdownListOrganization = document.getElementById("dropdownListOrganization");
const searchInDropdownsOrganization = document.getElementById("searchInDropdownsOrganization");
const companyInCard = document.getElementById("companyInCard");
document.addEventListener("DOMContentLoaded", () => {
    const pageLanguage = document.querySelector(".pageLanguage");
    dropdownInputLanguage.value = pageLanguage.textContent === "UKR" ? "Українська" : "English";
    varLanguage = pageLanguage.textContent;
    if (varLanguage === "UKR") {
        loadConnections(assetsUKR, webPagesOfAssetsUKR)
    }
    if (varLanguage === "ENG") {
        loadConnections(assetsENG, webPagesOfAssetsENG)
    }
    changeMainButtonsState()

})
dropdownInFormOpenClose(dropdownInputOrganization, dropdownArrowOrganization, dropdownsInFormOrganization, "#dropdownsInFormOrganization", "#searchInDropdownsOrganization", "#dropdownInputOrganization")
searchInDropdownsOrganization.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsOrganization.value.toLowerCase(), document.getElementsByClassName("buttonsInDropdownsOrganization"))
})

//--------------------------------dropdown with language options
const dropdownArrowLanguage = document.getElementById("dropdownArrowLanguage");
const dropdownsInFormLanguage = document.getElementById("dropdownsInFormLanguage");
const searchInDropdownsLanguage = document.getElementById("searchInDropdownsLanguage");
const buttonsInDropdownsLanguage = document.getElementsByClassName("buttonsInDropdownsLanguage");
dropdownInFormOpenClose(dropdownInputLanguage, dropdownArrowLanguage, dropdownsInFormLanguage, "#dropdownsInFormLanguage", "#searchInDropdownsLanguage", "#dropdownInputLanguage")
searchInDropdownsLanguage.addEventListener("input", function(e) {
    dropdownInFormSearch(searchInDropdownsLanguage.value.toLowerCase(), buttonsInDropdownsLanguage)
})
for (let i = 0; i < buttonsInDropdownsLanguage.length; i++) {
    buttonsInDropdownsLanguage[i].addEventListener("click", () => {
        if (dropdownInputLanguage.value === buttonsInDropdownsLanguage[i].textContent) {
        }
        else{
            let assetsArrayUKR = Object.keys(assetsUKR);
            let assetsArrayENG = Object.keys(assetsENG);
            if (buttonsInDropdownsLanguage[i].textContent === "Українська" || buttonsInDropdownsLanguage[i].textContent === "Ukrainian") {
                varLanguage = "UKR";
                let position = assetsArrayENG.indexOf(companyInCard.textContent);
                loadConnections(assetsUKR, webPagesOfAssetsUKR)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayUKR[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }         
            }
            else if (buttonsInDropdownsLanguage[i].textContent === "Англійська" || buttonsInDropdownsLanguage[i].textContent === "English") {
                varLanguage = "ENG";
                let position = assetsArrayUKR.indexOf(companyInCard.textContent);
                loadConnections(assetsENG, webPagesOfAssetsENG)
                const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
                for (let j = 0; j < buttonsInDropdownsOrganization.length; j++) {
                    if (buttonsInDropdownsOrganization[j].textContent === assetsArrayENG[position]) {
                        buttonsInDropdownsOrganization[j].click()
                    }
                }
            } 
        }
    })
}
dropdownInFormSelectChoice(buttonsInDropdownsLanguage, dropdownInputLanguage, null, null, null, null)

//--------------------------------other inputs
fullnameInput.addEventListener("input", function(e) {
    changeCardContent(fullnameInput, fullnameInCard, "Повне ім'я", "Full name")
    closingRemarkInCard.style.color = fullnameInput.value.length > 0 ? "black" : "#D3D3D3";
})
emailInput.addEventListener("input", function(e) {
    changeCardContent2(emailInput, emailInCard, "Електронна пошта", "Email")
})
positionInput.addEventListener("input", function(e) {
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
})
additionalInfoInput.addEventListener("input", function(e) {
    additionalInfoInCard.style.position = additionalInfoInput.value.length > 0 ? "relative" : "absolute";
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
})
workPhoneInput.addEventListener("input", function(e) {
    workPhoneInCard.style.position = workPhoneInput.value.length > 0 ? "relative" : "absolute";
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
})
mobilePhoneInput.addEventListener("input", function(e) {
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
})
workPhoneInput.addEventListener("focusin", () => {
    if (document.querySelector(".pageLanguage").textContent === "UKR") {
        inputAutoSuggestion(workPhoneInput, "+38 0")
    }
    else{
        inputAutoSuggestion(workPhoneInput, "+")
    }
    
})
mobilePhoneInput.addEventListener("focusin", () => {
    if (document.querySelector(".pageLanguage").textContent === "UKR") {
        inputAutoSuggestion(mobilePhoneInput, "+38 0")
    }
    else{
        inputAutoSuggestion(mobilePhoneInput, "+")
    }
})
fullnameInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
emailInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
mobilePhoneInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
workPhoneInput.addEventListener("change", function(e) {
    createQrCode()
    changeMainButtonsState()
})
positionInput.addEventListener("change", function(e) {
    changeMainButtonsState()
})

//--------------------------------two main buttons in generation form
generateCardButton.addEventListener("mouseenter", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити підпис", "Fill in all necessary fields to create a signature")
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
    }   
})
generateCardButton.addEventListener("touchstart", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити підпис", "Fill in all necessary fields to create a signature")
        setTimeout(function() {
            warningMessage.style = null;
        }, 5000);
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
        setTimeout(function() {
            infoMessage.style = null;
        }, 5000);
    }   
})
getQrButton.addEventListener("mouseenter", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код", "Fill in all necessary fields to create a QR code")
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
    }
})
getQrButton.addEventListener("touchstart", function() {
    if (this.disabled === true) {
        showInfoMessage(warningMessage, "#FFF8D9", true, document.querySelector(".warningText"), "Заповніть всі необхідні поля, щоб створити QR-код", "Fill in all necessary fields to create a QR code")
        setTimeout(function() {
            warningMessage.style = null;
        }, 5000);
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
        setTimeout(function() {
            infoMessage.style = null;
        }, 5000);
    }
})
generateCardButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
        infoMessage.style = null;
    }
})
getQrButton.addEventListener("mouseleave", function() {
    if (this.disabled === true) {
        warningMessage.style = null;
        infoMessage.style = null;
    }
})
generateCardButton.addEventListener("click", () => {
    createQrCode()
    qrDiv.querySelector("img").onload = function () {
        const tempDiv = document.createElement("div");
        const textElements = document.getElementsByClassName("inputInCard");
        for (let i = 0; i < textElements.length; i++) {
            let textClone = textElements[i].cloneNode(true);
            textClone.style.lineHeight = "12px";
            textClone.style.margin = "0px";
            if (i === 0 || i === 5) {
                textClone.style.marginBottom = "12px";
            }
            textClone.style.fontSize = "12px";
            tempDiv.appendChild(textClone);

        }
        tempDiv.innerHTML += "<br>";
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = 130;
        tempCanvas.height = 170;
        tempCanvas.imageSmoothingEnabled = false;
        tempCanvas.getContext("2d").drawImage(this, 0, 0, 130, 130);
        tempCanvas.getContext("2d").drawImage(document.querySelector(".logoCard"), 0, 142, 130, 23);
        const imageClone = new Image();
        imageClone.src = tempCanvas.toDataURL("image/png");
        imageClone.style.position = 'relative';
        imageClone.style.marginTop = '10px';
        imageClone.style.marginLeft = '-2px';
        tempDiv.appendChild(imageClone);
        document.body.appendChild(tempDiv);
        const range = document.createRange();
        range.selectNode(tempDiv);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        tempDiv.remove();
        tempCanvas.remove();
        imageClone.remove();
    }
    showInfoMessage(successMessageCard, "#E4F9E8", false, null, null, null)
    if (successMessageQR.style.opacity === "1") {
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
        setTimeout(function() {
            infoMessage.style = null;
        }, 5000);
    }
    setTimeout(function() {
        successMessageCard.style = null;
    }, 5000);
})
getQrButton.addEventListener("click", () => {
    createQrCode()
    showInfoMessage(successMessageQR, "#E4F9E8", false, null, null, null)
    qrDiv.querySelector("img").onload = function () {
        const canvas = document.getElementById("qrCanvas");
        canvas.width = 256;
        canvas.height = 320;
        const canvasContext = canvas.getContext("2d");
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = "white";
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(this, 3, 3, 250, 250);
        canvasContext.drawImage(document.querySelector(".logoCard"), 3, 272, 250, 42);
        const downloadLink = document.createElement("a");
        downloadLink.href = canvas.toDataURL("image/png");
        downloadLink.download = "QR_Code";
        downloadLink.click()
    }
    if (successMessageCard.style.position === "relative") {
        infoMessage.style.position = "absolute";
        infoMessage.style.marginBottom = "0px";
        infoMessage.style.transform = "translateY(-10px)";
        infoMessage.style.opacity = "0";
        setTimeout(function() {
            infoMessage.style = null;
        }, 5000);
    }
    setTimeout(function() {
        successMessageQR.style = null;
    }, 5000);
})

//--------------------------------functions used in the code above
function dropdownInFormOpenClose(triggerInput, triggerArrow, triggerDivWithOptions, triggerDivWithOptionsID, triggerSearchBoxID, triggerInputID) {
    window.addEventListener("click", function(event) {
        if (triggerArrow.style.transform === "rotate(180deg)") {
            if (!event.target.matches(triggerDivWithOptionsID)) {
                if (!event.target.matches(triggerSearchBoxID)) {
                    triggerInput.style.outline = "none";
                    triggerInput.style.border = "1px rgba(154, 154, 154, 0.752) solid";
                    triggerArrow.style.transform = "rotate(0deg)";
                    triggerDivWithOptions.style.transform = "scaleY(0)";
                }
            } 
        }
        else {
            if (event.target.matches(triggerInputID)) {
                triggerInput.style.outline = "1px solid black";
                triggerInput.style.border = "1px solid black";
                triggerArrow.style.transform = "rotate(180deg)";
                triggerDivWithOptions.style.transform = "scaleY(1)";
            }
        }
    })
}
function dropdownInFormSearch(varSearch, triggerButtonsList) {
if (varSearch.length != 0) {
    for (let i = 0; i < triggerButtonsList.length; i++) {
        if (!triggerButtonsList[i].textContent.toLowerCase().includes(varSearch)) {
            triggerButtonsList[i].style.display = "none";
        }
        else{
            triggerButtonsList[i].style.display = "block";
        }
    }
}
else{
    for (let i = 0; i < triggerButtonsList.length; i++) {
        triggerButtonsList[i].style.display = "block";
    }
}
}
function dropdownInFormSelectChoice(triggerButtonsArray, triggerInput, relatedWithCard, cardParagraph, defaultValueUKR, defaultValueENG) {
    for (let i = 0; i < triggerButtonsArray.length; i++) {
        triggerButtonsArray[i].addEventListener("click", () => {
            triggerInput.value = triggerButtonsArray[i].textContent;
            if (relatedWithCard === true) {
                cardParagraph.textContent = triggerButtonsArray[i].textContent;
                changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG)
            }
        })
    }
}
function changeCardContent(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG) {
    let defaultValue = varLanguage === "UKR" ? defaultValueUKR : defaultValueENG;
    if (triggerInput.value === "") {
        cardParagraph.textContent = defaultValue;
        cardParagraph.style.color = "#D3D3D3";
    }
    else{
        cardParagraph.textContent = triggerInput.value;
        cardParagraph.style.color = "black";
    }
}
function changeCardContent2(triggerInput, cardParagraph, defaultValueUKR, defaultValueENG) {
    let defaultValue = varLanguage === "UKR" ? defaultValueUKR : defaultValueENG;
    if (triggerInput.value === "") {
        cardParagraph.innerHTML = defaultValue;
        cardParagraph.style.color = "#baddff";
    }
    else{
        cardParagraph.innerHTML = "<a target='_blank' href='mailto:" + triggerInput.value + "'style='color: #45a2ff; font-family: Arial, sans-serif;'>" + triggerInput.value + "</a>";
        cardParagraph.style.color = "#45A2FF";
    }
}

function inputAutoSuggestion(triggerInput, varAutoSuggestion) {
    if (triggerInput.value.length === 0) {
        triggerInput.value = varAutoSuggestion;
    }
}
function loadConnections(assetsList, webPagesOfAssetsList) {
    changeCardContent(dropdownInputOrganization, companyInCard, "Підприємство", "Company")
    changeCardContent2(dropdownInputOrganization, webPageInCard, "Сайт", "Webpage")
    changeCardContent(fullnameInput, fullnameInCard, "Повне ім'я", "Full name")
    changeCardContent2(emailInput, emailInCard, "Електронна пошта", "Email")
    changeCardContent(positionInput, positionInCard, "Посада", "Position")
    changeCardContent(additionalInfoInput, additionalInfoInCard, "", "")
    changeCardContent(workPhoneInput, workPhoneInCard, "", "")
    changeCardContent(mobilePhoneInput, mobilePhoneInCard, "Мобільний телефон", "Mobile number")
    closingRemarkInCard.textContent = varLanguage === "UKR" ? "З повагою," : "Sincerely,";
    corporationInCard.textContent = varLanguage === "UKR" ? "Група Метінвест" : "Metinvest Group";

    let assetsInDropdown = "";
    Object.keys(assetsList).forEach(key => {
        assetsInDropdown += `<li><button class='buttonsInDropdownsOrganization'>${key}</button></li>`
    })
    dropdownListOrganization.innerHTML = "";
    dropdownListOrganization.innerHTML = assetsInDropdown;
    const buttonsInDropdownsOrganization = document.getElementsByClassName("buttonsInDropdownsOrganization");
    dropdownInFormSelectChoice(buttonsInDropdownsOrganization, dropdownInputOrganization, true, companyInCard, "Підприємство", "Enterprize")
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            createQrCode()
            changeMainButtonsState()
            corporationInCard.style.color = "black";
        })
    }
    for (let i = 0; i < buttonsInDropdownsOrganization.length; i++) {
        buttonsInDropdownsOrganization[i].addEventListener("click", () => {
            webPageInCard.innerHTML = "<a target='_blank' href='https://" + webPagesOfAssetsList[buttonsInDropdownsOrganization[i].textContent] + "' style='color: #45a2ff; font-family: Arial, sans-serif;'>" + webPagesOfAssetsList[buttonsInDropdownsOrganization[i].textContent] +"</a>";
            webPageInCard.style.color = "#45A2FF";
        })
    }
}
function createQrCode() {
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0) {
        const imgLang = varLanguage === "UKR" ? "qrCodeExample" : "qrCodeExampleENG";
        document.querySelector(".cardBack").innerHTML = "<img class='qrCodeExample' src='img/" + imgLang + ".png' alt='Приклад QR-коду'><img class='logoCard' src='img/logoCard.png'>";
    }
    else{
        qrDiv.innerHTML = "";
        let qrString = "BEGIN:VCARD" + "\n" + "VERSION:2.1" + "\n" + "N;CHARSET=UTF-8:" + fullnameInput.value + "\n" + "TEL:" + mobilePhoneInput.value + "\n" + "TEL:" + workPhoneInput.value + "\n" + "EMAIL:" + emailInput.value + "\n" + "NOTE;CHARSET=UTF-8:" + dropdownInputOrganization.value +"\n"+"END:VCARD";
        new QRCode(document.getElementById("qrDiv"), qrString);
        qrDiv.querySelector("img").onload = function () {
            document.querySelector(".cardBack").innerHTML = "<img src='" + this.src + "' alt='QR-код' width='112' height='112' style='position: relative;'><img class='logoCard' src='img/logoCard.png' style='opacity: 1;'>";
            qr = this.src;
        }
    }
}
function changeMainButtonsState() {
    if (fullnameInput.value.length === 0 || emailInput.value.length === 0 || dropdownInputOrganization.value.length === 0 || positionInput.value.length === 0 || mobilePhoneInput.value.length === 0 || emailInCard.getBoundingClientRect().height > 14) {
        generateCardButton.disabled = true;
    }
    else{
        generateCardButton.disabled = false;
    }
    if (fullnameInput.value.length + emailInput.value.length + dropdownInputOrganization.value.length + mobilePhoneInput.value.length + workPhoneInput.value.length === 0 || emailInCard.getBoundingClientRect().height > 14) {
        getQrButton.disabled = true;
    }
    else{
        getQrButton.disabled = false;
    }
}
function showInfoMessage (messageDiv, varBackgroundColor, textNeeded, textParagraph, varTextUKR, varTextEng) {
    messageDiv.style.position = "relative";
    messageDiv.style.marginBottom = "2px";
    messageDiv.style.transform = "translateY(-2px)";
    messageDiv.style.backgroundColor = varBackgroundColor;
    messageDiv.style.opacity = "1";
    if (textNeeded === true) {
        textParagraph.textContent = document.querySelector(".pageLanguage").textContent === "UKR" ? varTextUKR : varTextEng;
    }
}