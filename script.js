function setTheme(dark) {
    let uname = dark ? "dark" : "light";              // We'll call the theme "uname" here
    if (dark) {
        document.body.classList.add("dark-theme");
        document.querySelector(".moon-icon").innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove("dark-theme");
        document.querySelector(".moon-icon").innerHTML = '<i class="fas fa-moon"></i>';
    }
    localStorage.setItem("name", uname);              // Store user's theme as "name"
}

function toggleTheme() {
    const isDark = !document.body.classList.contains("dark-theme");
    setTheme(isDark);
}

document.addEventListener("DOMContentLoaded", () => {
    // Get user's theme preference from localStorage using "name" key
    const stored = localStorage.getItem("name");     
    setTheme(stored === "dark");
    document.querySelector(".theme-toggle").addEventListener("click", toggleTheme);
});