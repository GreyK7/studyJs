'use strict';


let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movieName = prompt('Один из последних просмотренных фильмов?', '');
    let movieRating = prompt('На сколько оцените его?', '');
    personalMovieDB["movies"][movieName] = movieRating;
}

console.log(personalMovieDB);