burger = document.getElementById("burger");
header = document.getElementById("header");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-close-btn");
  header.classList.toggle("show-nav");
});
