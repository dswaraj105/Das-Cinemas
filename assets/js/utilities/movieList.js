

class MovieDescription{
  constructor(name, desc, showDet, booking, stars){
    this.name = name;
    this.description = desc;
    this.showDetails = showDet;
    this.bookingBtn = booking;
    this.stars = stars;
  }
}

class MovieList{
  constructor() {
    this.nowShowingList = [
      new MovieDescription('AVENGERS' ,'ENGLISH - ACTION' ,'NOW SHOWING' ,'BOOK TICKETS',3.3),
      new MovieDescription('SPIDERMAN: HOMECOMMING' ,'ENGLISH - ACTION' ,'NOW SHOWING' ,'BOOK TICKETS',3.4),
      new MovieDescription('TANHAJI' ,'HINDI - ACTION' ,'NOW SHOWING' ,'BOOK TICKETS',4.6),
      new MovieDescription('GULABO SITABO' ,'HINDI - DRAMA' ,'NOW SHOWING' ,'BOOK TICKETS',2.9),
      new MovieDescription('MALANG' ,'HINDI - ROMANCE' ,'NOW SHOWING' ,'BOOK TICKETS',3.1)
    ];
    this.commingSoonList = [
      new MovieDescription('THE BABY BOSS: 2' ,'ENGLISH - CARTOON' ,'RELEASING ON 12-OCT' ,'PRE BOOKINGS',1.2),
      new MovieDescription('WONDER WOMEN' ,'ENGLISH - ACTION' ,'RELEASING ON 14-OCT' ,'PRE BOOKINGS',2.3),
      new MovieDescription('CLASS OF 83' ,'HINDI - ACTION' ,'RELEASING ON 23-OCT' ,'PRE BOOKINGS', 4.5),
      new MovieDescription('BALCK WIDOW' ,'ENGLISH - ACTION' ,'RELEASING ON 1-NOV' ,'PRE BOOKINGS',3.1),
      new MovieDescription('CANDYMAN' ,'ENGLISH - DRAMA' ,'RELEASING ON 9-OCT' ,'PRE BOOKINGS',3.1)
    ]
    this.displayNowShowingList();
    this.displayCommingSoonList();
  }

  displayNowShowingList() {
    const container = document.querySelector('.movie-showing');
    this.nowShowingList.forEach((movie) => {
      this.displayMovieItem(movie, container);
    });
  }

  displayCommingSoonList() {
    const container = document.querySelector('.movie-comming');
    this.commingSoonList.forEach((movie) => {
      this.displayMovieItem(movie, container);
    });
  }

  displayMovieItem(movie, container){
    const temp = document.querySelector('.movie-box');
    const card = document.importNode(temp.content, true);
    card.querySelector('h6').textContent = movie.name;
    card.querySelector('b').textContent = movie.description;
    card.querySelector('.status').textContent = movie.showDetails;
    card.querySelector('.btn-light').textContent = movie.bookingBtn;
    card.querySelector('.heart').textContent = movie.stars;
    container.appendChild(card);
  }

}
