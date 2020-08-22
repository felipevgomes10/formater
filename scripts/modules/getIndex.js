export default function active(items, index) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[index].classList.add("active");
}
