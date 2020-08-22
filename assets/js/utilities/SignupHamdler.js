

class UserSignup{
  constructor() {
    this.signupForm = document.querySelector('.signup');
    this.closeSignupBtn = document.getElementById('close-signup');
    this.openLoginBtn = document.querySelector('.open-login');
    this.eventListeners();
    console.log(this.closeSignupBtn);
  }

  //form validators
  validateInpnuts() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    let success = true;
    const reEmail = /\S+@\S+\.\S+/;

    if(name.value.trim() === ''){
      success = false;
      name.nextElementSibling.classList.remove('gayab');
    }else{
      if(!name.nextElementSibling.classList.contains('gayab')){
        name.nextElementSibling.classList.add('gayab');
      }
    }

    if(email.value.trim() === '' && !reEmail.test(email.value)){
      success = false;
      email.nextElementSibling.classList.remove('gayab');
    }else{
      if(!email.nextElementSibling.classList.contains('gayab')){
        email.nextElementSibling.classList.add('gayab');
      }
    }

    if(mobile.value.length === 10){
      success = false;
      name.nextElementSibling.classList.remove('gayab');
    }else{
      if(!mobile.nextElementSibling.classList.contains('gayab')){
        mobile.nextElementSibling.classList.add('gayab');
      }
    }

    if(password1.value >= 6){
      success = false;
      password1.nextElementSibling.classList.remove('gayab');
    }else{
      if(!password1.nextElementSibling.classList.contains('gayab')){
        password1.nextElementSibling.classList.add('gayab');
      }
    }

    if(password2.value === password1.value){
      success = false;
      password2.nextElementSibling.classList.remove('gayab');
    }else{
      if(!password2.nextElementSibling.classList.contains('gayab')){
        password2.nextElementSibling.classList.add('gayab');
      }
    }
    console.log('validated form');
    if(success){
      return {
        name: name.value,
        email: email.value,
        mobile: mobile.value,
        password: password1.value
      }
    }
  }

  //handling signup
  signupHandler() {
    this.closeSignupHandler();
  }

  closeSignupHandler(){
    document.querySelector('.signup-model').classList.add('gayab');
    document.body.classList.remove('no-scroll');
  }

  openLoginHandler(){
    this.closeSignupHandler();
    const toggleNav = document.getElementById('toggle');
    document.body.classList.toggle('show-nav-body');
    document.querySelector('.side-nav').classList.toggle('show-nav'); 
    toggleNav.children[0].classList.toggle('fa-bars');
    toggleNav.children[0].classList.toggle('fa-times');
  }

  //adding event listeners
  eventListeners () {
    this.signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.signupHandler();
    });

    this.closeSignupBtn.addEventListener('click', ()=> {
      console.log('çlosing-signup');
      this.closeSignupHandler();
    });
    this.openLoginBtn.addEventListener('click', this.openLoginHandler.bind(this));
  }
}