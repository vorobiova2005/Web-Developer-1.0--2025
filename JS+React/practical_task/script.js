'use strict';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '').trim();
        }
    }, 
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt('Один з переглянутих фільмів?', '').trim(),
                  b = prompt('На скільки ви оціните цого?', '').trim();
        
            if (a != null && b != null && a !='' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else{
                console.log('error');
                i--;
            }
        } 
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Ви подиивилися доволі мало фільмів");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Ви класичний глядач");
        } else if(personalMovieDB.count >= 30) {
            console.log("Ви кіноман");
        } else{
            console.log("Сталася помилка");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenders: function(){
        for (let i = 1; i <=3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);

            if (genre === '' || genre == null){
                console.log('Ви ввели некоректні дані або не ввели їх зовсім');
                i--;
            } else{
                personalMovieDB.genres[i - 1] = genre;
            }
            
            personalMovieDB.genres.forEach((item, i) => {
               console.log(`Улюблений жанр ${i + 1} - це ${item}`);
            });
        }
    }
};
