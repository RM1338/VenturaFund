function AppearanceMode() {
    let AppearanceIcon = document.getElementsByClassName("moon-icon")[0];

    if (AppearanceIcon.innerHTML === '<i class="fas fa-moon"></i>') {
        AppearanceIcon.innerHTML = '<i class="fas fa-sun"></i>';
    }
    else {
        AppearanceIcon.innerHTML = '<i class="fas fa-moon"></i>';
    }
}