'use strict';


let numberOfFilms;


function start() {
    while(numberOfFilms == undefined || numberOfFilms === '' ||  isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '')?.trim();
    }
    numberOfFilms = +numberOfFilms;
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movieName = prompt('Один из последних просмотренных фильмов?', '')?.trim();
        let movieRating = prompt('На сколько оцените его?', '')?.trim();
        if ((movieName === undefined || movieName === ''  || movieName.length > 50) ||  ( movieRating === undefined || movieRating === '')) {
            i--;
        } else {
            personalMovieDB["movies"][movieName] = movieRating;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотренно довольно мало фильмаов');
    } else if (numberOfFilms < 30 ) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
}

detectPersonalLevel();

function writeYourGenres(obj) {
    for (let i = 1; i <= 3; i++) {
        obj.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}

writeYourGenres(personalMovieDB);

function showMyDB(obj) {
    if (obj.private == false) {
        console.log(obj);
    }
}

showMyDB(personalMovieDB);



