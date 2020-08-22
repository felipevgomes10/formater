import scrollFunction from "./scrollFunction.js";
import active from "./getIndex.js";

export default (function scrollToSectionNavBar() {
  const navItems = document.querySelectorAll('[data-smooth]');
  const btns = document.querySelectorAll(".scroll a[href^='#']");

navItems.forEach((navItem, index) => {
  navItem.addEventListener("click", (event) => {
    scrollFunction(event);
    active(btns, index);
  });
});
})();
