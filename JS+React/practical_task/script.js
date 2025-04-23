const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

/* 
Автоматизація коду за допомоою циклів
const a = prompt('Один з переглянутих фільмів?', ''),
      b = prompt('На скільки ви оціните цого?', ''),
      c = prompt('Один з переглянутих фільмів?', ''),
      d = prompt('На скільки ви оціните цого?', '');
personalMovieDB.movies[c] = d; */

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

if(personalMovieDB.count < 10){
    console.log("Ви подиивилися доволі мало фільмів");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
} else if(personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
} else{
    console.log("Сталася помилка");
}

console.log(personalMovieDB);