const nameForm = document.querySelector("#namePage__form");
const nameInput = document.querySelector("#namePage__form-input");
const letterName = document.querySelector("#letterName");
const LETTERNAME_KEY = "lettername";
const savedLettername = localStorage.getItem(LETTERNAME_KEY);

function onNameSubmit(){
    const lettername = nameInput.value;
    localStorage.setItem(LETTERNAME_KEY, lettername);
    paintLetterName(lettername);
}
function paintLetterName(lettername){
    letterName.innerText = `${lettername}`;
}

if(savedLettername === null){
    nameForm.addEventListener("submit", onNameSubmit);
} else {
    paintLetterName(savedLettername);
}