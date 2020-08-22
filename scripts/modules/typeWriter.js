export default (function typeWriter() {})();

const text = document.querySelector(".s1__heading-primary");
const letters = text.innerText.split("");

letters.forEach((letter, index) => {
  text.innerText = "";
  setTimeout(() => {
    text.innerHTML += letter;
  }, 100 * index);
});
