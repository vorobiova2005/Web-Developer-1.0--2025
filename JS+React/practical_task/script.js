'use strict';
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один з переглянутих фільмів?', ''),
              b = prompt('На скільки ви оціните цого?', '');
    
        if (a != null && b != null && a !='' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else{
            console.log('error');
            i--;
        }
    } 
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Ви подиивилися доволі мало фільмів");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви класичний глядач");
    } else if(personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    } else{
        console.log("Сталася помилка");
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenders(){
    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenders();