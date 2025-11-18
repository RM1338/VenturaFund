// Navigation Bar
function loadWelcome() {
    if (sessionStorage.getItem("Username") === null) {
        document.getElementById("SignInA").style.display = "inline";
        document.getElementById("WelcomeXYZ").style.display = "none";
    }
    else {
        document.getElementById("SignInA").style.display = "none";
        document.getElementById("WelcomeXYZ").innerText = "Welcome, "+ sessionStorage.getItem("Username") + " ";
        document.getElementById("WelcomeXYZ").innerHTML = "Welcome, <span>"+ sessionStorage.getItem("Username") + "</span> ";
        document.getElementById("WelcomeXYZ").style.display = "inline";
        document.getElementById("WelcomeXYZ").className = "arrow down";
    }
}
function removeSignOutButton() {
    sessionStorage.removeItem("Username");
    location.reload();
}

// Discover Page
function discoverOnLoad() {
    document.getElementById("showWithButton1").style.display = "none";
    document.getElementById("showWithButton2").style.display = "none";
    document.getElementById("showWithButton3").style.display = "none";
    document.getElementById("showWithButton4").style.display = "none";
    document.getElementById("showWithButton5").style.display = "none";
    document.getElementById("showWithButton6").style.display = "none";
    document.getElementById("showWithButton7").style.display = "none";
    document.getElementById("showWithButton8").style.display = "none";
    document.getElementById("showWithButton9").style.display = "none";
    document.getElementById("showWithButton10").style.display = "none";
    document.getElementById("showWithButton11").style.display = "none";
    document.getElementById("showWithButton12").style.display = "none";
}
function loadMore() {
    document.getElementById("showWithButton1").style.display = "inline-block";
    document.getElementById("showWithButton2").style.display = "inline-block";
    document.getElementById("showWithButton3").style.display = "inline-block";
    document.getElementById("showWithButton4").style.display = "inline-block";
    document.getElementById("showWithButton5").style.display = "inline-block";
    document.getElementById("showWithButton6").style.display = "inline-block";
    document.getElementById("showWithButton7").style.display = "inline-block";
    document.getElementById("showWithButton8").style.display = "inline-block";
    document.getElementById("showWithButton9").style.display = "inline-block";
    document.getElementById("showWithButton10").style.display = "inline-block";
    document.getElementById("showWithButton11").style.display = "inline-block";
    document.getElementById("showWithButton12").style.display = "inline-block";
    document.getElementById("LoadMore").style.display = "none";
}