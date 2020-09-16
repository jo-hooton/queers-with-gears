const nav = document.getElementById("nav");
const navContent = document.querySelector(".nav-content");
const toggleBtn = document.querySelector("#toggle-menu-btn");
const links = document.querySelectorAll("a");

const handleClick = (event) => {
  console.log(event);
};

const toggleNav = () => {
  nav.style.width == "100%"
    ? (nav.style.width = "0")
    : (nav.style.width = "100%");
  navContent.style.width == "100%"
    ? (navContent.style.width = "0")
    : (navContent.style.width = "100%");
  toggleBtn.classList.toggle("open");
};

const scrollToLink = (id) => {
  document.querySelector(`#${id}`).scrollIntoView;
  toggleNav();
};

toggleBtn.addEventListener("click", toggleNav);
links.forEach((link) => {
  link.addEventListener("click", console.log(link.id));
});
