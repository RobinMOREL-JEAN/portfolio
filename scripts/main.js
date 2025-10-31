if (window.innerWidth >= 800){
    window.addEventListener("scroll", () => {
        const desktopMenu = document.querySelector("#navigation-menu");
            if (window.scrollY > 100) {
                desktopMenu.classList.add("header-color-swap");
                console.log(window.innerWidth);
            }
            else {
                desktopMenu.classList.remove("header-color-swap");
            }
    })
}


const toggleNav = () => {
    const mobileMenu = document.querySelector("#navigation-menu");
    const mobileBackgroundOverlay = document.querySelector("#mobile-background-overlay");

    const isMobileMenuOpen = mobileMenu.classList.contains ("open-menu");

    if (isMobileMenuOpen) {
        mobileMenu.classList.remove("open-menu");
        mobileBackgroundOverlay.classList.remove("open-menu");
    } else {
        mobileMenu.classList.add("open-menu");
        mobileBackgroundOverlay.classList.add("open-menu");
    }
}