export default (function sectionTwoObserver() {
  const sectionTarget = document.querySelector('.s2');

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      const heading = document.querySelector('.s2__heading-primary');
      heading.classList.add('active');

    }
  }
  const observer = new MutationObserver(handleMutation);
  observer.observe(sectionTarget, { attributes: true });
})();