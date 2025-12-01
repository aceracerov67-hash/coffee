const bars = document.querySelector(".bars");
const navList = document.querySelector(".nav__list");

bars.addEventListener("click", () => {
    navList.classList.toggle("active");
});
