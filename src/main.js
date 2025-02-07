import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const wrapperForms = document.querySelector('.wrapper__forms');
    const formLogin = document.querySelector('.form__login');
    const formRegister = document.querySelector('.form__register');
    const btnRegisterInformation = document.getElementById('btn-register-information');
    const btnLoginInformation = document.getElementById('btn-login-information');

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    btnRegisterInformation.addEventListener('click', () => {
        wrapperForms.classList.add('registering');
        wrapperForms.classList.add('active-editing');
        formLogin.classList.add('active-editing');
        formRegister.classList.add('active-editing');
    });

    btnLoginInformation.addEventListener('click', () => {
        wrapperForms.classList.remove('registering');
    });
});