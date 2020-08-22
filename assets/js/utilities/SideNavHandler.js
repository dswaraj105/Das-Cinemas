

class SideNavHandler{
  constructor() {
    this.toggleNav = document.getElementById('toggle');
    this.closeNav = document.getElementById('close-nav');
    this.login = document.getElementById('login-form');
    this.logoutbtn = document.getElementById('logout');
    this.openSignupBtn = document.querySelector('.open-signup');
    this.closeSignupBtn = document.getElementById('close-signup');
    this.connectListeners();
  }

  //show-hide nav
  sideNavToggle(){
    document.body.classList.toggle('show-nav-body');
    document.querySelector('.side-nav').classList.toggle('show-nav'); 
    this.toggleNav.children[0].classList.toggle('fa-bars');
    this.toggleNav.children[0].classList.toggle('fa');
    // this.toggleNav.children[0].classList.toggle('fa-times');
  }

  //login handler
  checkAndLogin() {
    let userName = document.getElementById('phone-no').value;
    const password = document.getElementById('password-log').value;
    if(userName.trim() === '' || password.trim() === ''){
      return;
    }
    document.querySelector('.login-nav').classList.add('hide');
    document.querySelector('.user-info-nav').classList.remove('hide');
    document.getElementById('user-name').textContent = userName.split('@')[0];;
  }

  //logout handler
  logoutHandler() {
    document.querySelector('.login-nav').classList.remove('hide');
    document.querySelector('.user-info-nav').classList.add('hide');
  }

  //open signup handler
  openSignup() {
    this.toggleNav.click();
    this.toggleSignupModel();
  }

  toggleSignupModel() {
    document.querySelector('.signup-model').classList.toggle('gayab');
    document.body.classList.toggle('no-scroll');
  }

  //adding event listeners
  connectListeners(){
    this.toggleNav.addEventListener('click', this.sideNavToggle.bind(this));
    this.login.addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkAndLogin.call(this);
    });
    this.closeNav.addEventListener('click', ()=> {
      this.toggleNav.click();
    });
    this.logoutbtn.addEventListener('click', this.logoutHandler);
    this.openSignupBtn.addEventListener('click', this.openSignup.bind(this));
    this.closeSignupBtn.addEventListener('click', this.toggleSignupModel);
  }

}