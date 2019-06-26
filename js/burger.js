burger = document.getElementById("burger");
header = document.getElementById("header");
navigation = document.getElementsByTagName("nav")[0];
navItems = navigation.getElementsByTagName("a");

function toggleNav() {
  burger.classList.toggle("burger-close-btn");
  header.classList.toggle("show-nav");
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", toggleNav);
}

console.log(navigation);

burger.addEventListener("click", toggleNav);
