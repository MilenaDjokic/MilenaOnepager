let body = document.querySelector("body");
let isMin = false;
let timeout;

// Minimize header when scrolled, but whait with the check for 250ms - event debouncing
window.onscroll = () => {
  if (!timeout) {
    timeout = setTimeout(function() {
      timeout = null;
      if (
        document.body.scrollTop > 5 ||
        document.documentElement.scrollTop > 5
      ) {
        if (!isMin) {
          body.classList.add("header-min");
          isMin = true;
        }
      } else {
        if (isMin) {
          body.classList.remove("header-min");
          isMin = false;
        }
      }
    }, 250);
  }
};
