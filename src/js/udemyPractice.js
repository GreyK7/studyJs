'use strict';

// 29.09.23 РЕФАКТОРИНГ

let personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    startFill() {
        while(this.count == undefined || this.count === '' ||  isNaN(this.count)) {
            this.count = prompt('Сколько фильмов вы уже посмотрели?', '')?.trim();
        }
        this.count = +this.count;
    },
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let movieName = prompt('Один из последних просмотренных фильмов?', '')?.trim();
            let movieRating = prompt('На сколько оцените его?', '')?.trim();
            if ((movieName === undefined || movieName === ''  || movieName.length > 50) ||  ( movieRating === undefined || movieRating === '')) {
                i--;
            } else {
                this["movies"][movieName] = movieRating;
            }
        }
    },
    detectPersonalLevel() {
        if (this.count < 10) {
            console.log('Просмотренно довольно мало фильмаов');
        } else if (this.count < 30 ) {
            console.log('Вы классический зритель');
        } else if (this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        } 
    },
    toggleVisibleMyDB() {
        if (this.private) { 
            this.private = false;
        }
        else { 
            this.private = true;
        }
    },
    writeYourGenres() {
        let i = 1;
        while (i < 4) {
            let tempo = prompt(`Ваш любимый жанр под номером ${i}`, '')?.trim();
            if (tempo !== undefined && tempo !== '') {
                this.genres.push(tempo)
                i++;
            }
        }
        this.genres.forEach( (item, index) => {
            console.log(`Любимый жанр # ${index + 1} - это ${item}`);
        })
    },
    showMyDB() {
        if (this.private == false) {
            console.log(this);
        }
    }
};

personalMovieDB.startFill();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();