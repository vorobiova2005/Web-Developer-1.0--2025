const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt('Один з переглянутих фільмів?', ''),
      b = prompt('На скільки ви оціните цого?', ''),
      c = prompt('Один з переглянутих фільмів?', ''),
      d = prompt('На скільки ви оціните цого?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);