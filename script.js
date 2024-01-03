const menuLinks = document.querySelectorAll(".menu-link a");
const pageLinks = document.querySelector(".page-links");
const pageContent = document.querySelector(".page-content");
const goUp = document.querySelector(".go-up");
const navbar = document.querySelector(".navbar");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-navbar-icon")) {
    pageLinks.classList.toggle("open");
  } else {
    pageLinks.classList.remove("open");
  }
});

window.addEventListener("scroll", () => {
  pageLinks.classList.remove("open");

  if (window.scrollY >= 728) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

pageContent.addEventListener("scroll", () => {
  if (pageContent.scrollTop >= 200) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }
});

goUp.addEventListener("click", () => {
  pageContent.scroll(0, 0);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((a) => {
      a.classList.remove("active");
    });
    link.classList.add("active");
  });
});