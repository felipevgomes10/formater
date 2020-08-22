export default function scrollFunction(event) {
  event.preventDefault();
  const place = event.target;
  const section = place.getAttribute("href");
  const go = document.querySelector(section);

  go.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
