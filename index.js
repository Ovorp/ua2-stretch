const formBtn = document.querySelector('#close-form');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const emailList = [];

function validateForm() {
  if (!nameInput.value && !emailInput.value) {
    nameInput.style.border = 'solid red 2px';
    emailInput.style.border = 'solid red 2px';
    alert('You must enter a name and an email address to subscribe!');
  } else if (!nameInput.value) {
    nameInput.style.border = 'solid red 2px';
    alert('Please enter a name to Subscribe!');
  } else if (!emailInput.value) {
    emailInput.style.border = 'solid red 2px';
    alert('Please enter an email address to Subscribe!');
  } else {
    emailList.push({ name: nameInput.value, email: emailInput.value });
  }
}

function toggler() {
  form.classList.toggle('hide');
  formBtn.innerText === 'X'
    ? (formBtn.innerText = '+')
    : (formBtn.innerText = 'X');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});
formBtn.addEventListener('click', toggler);
