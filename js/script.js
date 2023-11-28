let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
}

document.querySelector('#close-account').onclick = () => {
    account.classList.remove('active');
}
