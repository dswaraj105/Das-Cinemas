// import { DOMHelper } from './utilities/DomHelper.js';

class App{
  constructor() {

  }

  static init() {
    const sideNav = new SideNavHandler();
    const dom = new DOMHelper();
    const signup = new UserSignup();
    const list = new MovieList();
  }
}

App.init();