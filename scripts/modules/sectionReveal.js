export default (function sectionReveal() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.8
    sections[0].classList.add('active');

    function handleScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop - halfWindow < 0;

        if (isVisible) {
          section.classList.add('active');
        } else if (section.classList.contains('active')) {
          section.classList.remove('active');
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
  }

})();
