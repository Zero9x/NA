const rename = document.querySelector('#letterPage__form-rename');

function renameSet() {     
    localStorage.removeItem(LETTERNAME_KEY)
}

rename.addEventListener("click", renameSet);