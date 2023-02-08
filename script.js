const barsIcon = document.querySelector("header .header-icons .menu-bars");
const closeIcon = document.querySelector("header .header-icons .close");
const nav = document.querySelector("header .nav-items");
const navItems = document.querySelectorAll("header .nav-items a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});
barsIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  barsIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
});
closeIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  barsIcon.classList.toggle("active");
  closeIcon.classList.toggle("active");
});
navItems?.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
