const formBtn = document.querySelector('#close-form');
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const emailList = [];
const formContainer = document.querySelector('.form-container');
const cart = document.createElement('div');
const main = document.querySelector('main');
let cartItems = 0;

function addToCart() {
  if (cartItems === 0) {
    cartItems = 1;
    cart.setAttribute('class', 'cart-display');
    cart.innerText = `Your Cart: 1 item`;
    main.appendChild(cart);
  } else {
    cartItems++;
    cart.innerText = `Your Cart: ${cartItems} items`;
  }
}

function displayThankYou() {
  formContainer.innerText = 'Thank you for Subscribing!';
  setTimeout(function () {
    formContainer.remove();
  }, 3000);
}

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
    displayThankYou();
    emailList.push({ name: nameInput.value, email: emailInput.value });
  }
}

function toggler() {
  form.classList.toggle('hide');
  formBtn.innerText === 'X'
    ? (formBtn.innerText = '+')
    : (formBtn.innerText = 'X');
}

nameInput.addEventListener('change', () => (nameInput.style.border = 'none'));
emailInput.addEventListener('change', () => (emailInput.style.border = 'none'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

formBtn.addEventListener('click', toggler);
