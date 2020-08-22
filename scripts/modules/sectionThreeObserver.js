export default (function sectionThreeObserver() {
  const sectionTarget = document.querySelector('.s3');

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      const heading = document.querySelector('.s3__heading-primary');
      const formWrapper = document.querySelector('.s3__form-wrapper');
      const information = document.querySelector('.s3__information');
      heading.classList.add('active');
      formWrapper.classList.add('active');
      information.classList.add('active');
    }
  }
  const observer = new MutationObserver(handleMutation);
  observer.observe(sectionTarget, { attributes: true });
})();
