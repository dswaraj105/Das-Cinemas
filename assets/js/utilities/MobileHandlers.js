

class MobileHandler{
    constructor() {
        this.nowShowingBtn = document.querySelector('.now');
        this.commingSoonBtn = document.querySelector('.soon');
        this.eventListeners();
    }

    toggleList(){
        this.nowShowingBtn.classList.toggle('active');
        this.commingSoonBtn.classList.toggle('active');
        document.querySelector('.movie-showing').classList.toggle('hide-list');
        document.querySelector('.movie-comming').classList.toggle('hide-list');
    }

    eventListeners() {
        this.nowShowingBtn.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')){
                return;
            }
            this.toggleList();
        });

        this.commingSoonBtn.addEventListener('click', (e) => {
            if(e.target.classList.contains('active')){
                return;
            }
            this.toggleList();
        });
    }
}

new MobileHandler();