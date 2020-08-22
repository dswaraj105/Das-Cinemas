
class DOMHelper{
  
  constructor() {
    this.leftScroll = document.querySelectorAll('.left-arrow');
    this.rightScroll = document.querySelectorAll('.right-arrow');
    this.connectListeners();
  }

  //functions to scroll movie containers
  scrollContainerLeft(element, xoffset) {
    element.parentElement.parentElement.scrollBy(xoffset, 0);
  }

  //ADDING EVENT LISTENEERS
  connectListeners() {
    this.leftScroll.forEach( ls =>{
      ls.addEventListener('click', e => {
        this.scrollContainerLeft(e.target, -300);
      });
    });

    this.rightScroll.forEach( rs => {
      rs.addEventListener('click', e => {
        this.scrollContainerLeft(e.target, 300);
      });
    });
  }
}