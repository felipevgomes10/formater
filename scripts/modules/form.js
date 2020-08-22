export default (function form() {
  const form = document.getElementById('data');
  const data = {}
  
  function handleChange(event) {
    const name = event.target.name
    const field = event.target;
  
    if (!field.checkValidity()) {
      field.style.border = '2px solid #ef3434';
      field.nextElementSibling.classList.add('active');
      field.nextElementSibling.innerHTML = '<img class="s3__validation-icons" src="./img/cross.png" alt="cross mark" />';
    } else {
      field.style.border = '2px solid #24db73';
      field.nextElementSibling.classList.add('active');
      field.nextElementSibling.innerHTML = '<img class="s3__validation-icons" src="./img/check.png" alt="cross mark" />';
    }
  
    data[name] = field.value;
    console.log(data);
  }
  form.addEventListener('change', handleChange);
})();