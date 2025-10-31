//Swap de couleur heading en scroll

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
       menuNavigation.classList.replace("menuNavigationDark", "menuNavigationLight");
    }
    else {
        menuNavigation.classList.replace("menuNavigationLight", "menuNavigationDark");
    }
})


//Ouverture/fermeture menu nav sous mobile
homeMenuIcon.addEventListener("click", () => {
    if (isMobileUIOpen) {
        funCloseMobileUI();
    } else {
        funOpenMobileUI();
    }
});


const funOpenMobileUI = () => {
        mobileNavMenu.style.transform = "translateX(0%)";
        mobileNavMenuBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        mobileNavMenuBox.style.pointerEvents = "auto";

        isMobileUIOpen = true;
}
const funCloseMobileUI = () => {
        mobileNavMenu.style.transform = "translateX(-100%)";
        mobileNavMenuBox.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        mobileNavMenuBox.style.pointerEvents = "none";

        isMobileUIOpen = false;
}

mobileNavMenuLinks.forEach(currentLink => {
    currentLink.addEventListener("click", () => {
        funCloseMobileUI();
    });
});