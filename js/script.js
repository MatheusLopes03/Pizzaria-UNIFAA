let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
}

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () => {
  cart.classList.remove('active');
}

let formSignin = document.querySelector('#signin')
let formSignup = document.querySelector('#signup')
let btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})
