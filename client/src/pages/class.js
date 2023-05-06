const themeButton = document.getElementById("theme-button");
const modalButton = document.getElementById("modal-button");

const toggleDarkMode = () => {
    if (themeButton.innerHTML == "Light mode") {
        themeButton.innerHTML = "Dark mode";
        themeButton.classList.add("btn-dark");
    } else {
        themeButton.innerHTML = "Light mode";
        themeButton.classList.remove("btn-dark");
    }

    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
}

themeButton.addEventListener("click", toggleDarkMode);