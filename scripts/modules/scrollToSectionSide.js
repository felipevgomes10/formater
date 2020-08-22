import scrollFunction from "./scrollFunction.js";
import active from "./getIndex.js";

export default (function scrollToSection() {
  const btns = document.querySelectorAll(".scroll a[href^='#']");

  btns[0].classList.add("active");

  btns.forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      scrollFunction(event);
      active(btns, index);
    });
  });
})();
