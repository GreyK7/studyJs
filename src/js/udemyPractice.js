'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movieName = prompt('Один из последних просмотренных фильмов?', '')?.trim();
    let movieRating = prompt('На сколько оцените его?', '')?.trim();
    if ((movieName === undefined || movieName === ''  || movieName.length > 50) ||  ( movieRating === undefined || movieRating === '')) {
        i--;
    } else {
        personalMovieDB["movies"][movieName] = movieRating;
    }
}

if (numberOfFilms < 10) {
    console.log('Просмотренно довольно мало фильмаов');
} else if (numberOfFilms < 30 ) {
    console.log('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);