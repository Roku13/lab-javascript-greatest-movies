// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => {
  return arr.map((movie) => movie.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

 const howManyMovies = (arr) => {
  let spielbergDrama = arr.filter((drama) => drama.director === "Steven Spielberg" && drama.genre.includes("Drama"))
  return spielbergDrama.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

 const ratesAverage = (arr) => {
  let sum = arr.reduce((acc, curr) => {
      if (curr.rate === undefined) {
          return acc;
      };
     return acc + curr.rate / arr.length
  },0);
return Math.round(sum * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes("Drama"));
  let sum = dramas.reduce((acc, curr) => {
      if (curr.rate === undefined || curr.rate == " ") {
          return acc;
      };
     return acc + curr.rate / dramas.length
  },0);
return Math.round(sum * 100) / 100;
} 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arrOfMovies) => {
  let arrOfMoviesCopy = arrOfMovies 

   arrOfMoviesCopy.sort((a,b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  })
  return arrOfMovies
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arrOfMovies) => {

  let movieTitles = arrOfMovies.map(x => x.title)
  let sortedMovies = movieTitles.sort();
  
  if (sortedMovies.length >= 20) {
    return sortedMovies.slice(0,20);
  }
  return sortedMovies
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
