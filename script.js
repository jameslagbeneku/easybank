const mobileNav = document.querySelector(".mobile-nav-links")
const open = document.getElementById("open")
const close = document.getElementById("close")

open.addEventListener("click", () => {
    mobileNav.classList.toggle("active");

    if (mobileNav.classList.contains("active")) {
        open.src = "images/icon-close.svg";
        open.style.transition = "0.2s ease"
    } else {
        open.src = "images/icon-hamburger.svg"
    }
})




