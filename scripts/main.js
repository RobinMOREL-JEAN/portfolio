const menu = document.querySelector("#navigation-menu");

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 800){
        if (window.scrollY > 100) {
            menu.classList.add("header-color-swap");
        }
        else {
            menu.classList.remove("header-color-swap");
        }
    }
})

const toggleNav = () => {
    const mobileBackgroundOverlay = document.querySelector("#mobile-background-overlay");
    const isMenuOpen = menu.classList.contains("open-menu");

    if (isMenuOpen) {
        menu.classList.remove("open-menu");
        mobileBackgroundOverlay.classList.remove("open-menu");
    } else {
        menu.classList.add("open-menu");
        mobileBackgroundOverlay.classList.add("open-menu");
    }
}