export default (function sideBtnColor() {
    const btns = document.querySelectorAll('.scroll a');
    const sections = document.querySelectorAll('section');

    function handleColor() {
        const scrollPosition = this.pageYOffset;
        const sectionTwoPosition = sections[1].offsetTop * .6;
        const sectionThreePosition = sections[2].offsetTop * .85;
        const isVisible = scrollPosition >= sectionTwoPosition && scrollPosition < sectionThreePosition;

        if(isVisible) {
            btns.forEach(btn => {
            btn.style.backgroundColor = '#1a1919';
                })
        } else {
            btns.forEach(btn => {
                btn.style.backgroundColor = '#f4f4f6';
            })
        }
    }
    window.addEventListener('scroll', handleColor);
})();

