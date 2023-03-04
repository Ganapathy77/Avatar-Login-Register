const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.btnLogin-popup');
const closeBtn = document.querySelector('.icon-close');
console.log(closeBtn)

loginLink.addEventListener('click' , ()=>{
    wrapper.classList.remove('active');
})

registerLink.addEventListener('click' , ()=>{
    wrapper.classList.add('active');
})

loginBtn.addEventListener('click' , ()=>{
    wrapper.classList.add('active-popup');
    if(wrapper.classList.contains('active')){
        wrapper.classList.remove('active');
    }
})

closeBtn.addEventListener('click' , ()=>{
    wrapper.classList.remove('active-popup');
})
