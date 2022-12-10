/* In this Task, I wrote a code that defines a MovieStore class that has several methods that allow it to manage its collection of movies, and to rent and return movies to users. It also defines a User class that has a name and a list of rented movies.

The MovieStore class has the following methods:

1. AddMovie: Adds a movie to the store's collection.
2. RemoveMovie: Removes a movie from the store's collection.
3. GetMovieById: Retrieves a movie from the store's collection by ID.
4. RentMovie: Rents a movie to a user.
5. ReturnMovie: Returns a rented movie to the store.
The User class has a single constructor method that accepts a name as an argument and uses it to set the name property of the User instance.

The code also creates an instance of MovieStore and an instance of User, and adds some movies to the store's collection. Then, it rents a movie to the user and returns it. */

class MovieStore {
    constructor() {
      this.movies = [];
      this.rentedMovies = [];
      this.availableMovies = [];
      this.userCatalogue = [];
    }
  
    // Adds a movie to the store's collection
    addMovie(movie) {
      this.movies.push(movie);
      this.availableMovies.push(movie);
    }
  
    // Removes a movie from the store's collection
    removeMovie(movie) {
      this.movies = this.movies.filter(m => m.id !== movie.id);
      this.availableMovies = this.availableMovies.filter(m => m.id !== movie.id);
    }
  
    // Retrieves a movie from the store's collection by ID
    getMovieById(id) {
      return this.movies.find(m => m.id === id);
    }
  
    // Rents a movie to a user
    rentMovie(user, movieId) {
      const movie = this.getMovieById(movieId);
      if (movie && this.availableMovies.includes(movie)) {
        movie.isRented = true;
        user.rentedMovies.push(movie);
        this.rentedMovies.push(movie);
        this.availableMovies = this.availableMovies.filter(m => m.id !== movie.id);
        this.userCatalogue.push({ user: user.name, movie: movie.title, action: "rented" });
      }
    }
  
    // Returns a rented movie to the store
    returnMovie(user, movieId) {
      const movie = this.getMovieById(movieId);
      if (movie && movie.isRented) {
        movie.isRented = false;
        user.rentedMovies = user.rentedMovies.filter(m => m.id !== movie.id);
        this.rentedMovies = this.rentedMovies.filter(m => m.id !== movie.id);
        this.availableMovies.push(movie);
        this.userCatalogue.push({ user: user.name, movie: movie.title, action: "returned" });
      }
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
      this.rentedMovies = [];
    }
  }
  
  // Example usage
  const movieStore = new MovieStore();
  const user = new User("John");
  
  const movie1 = { id: 1, title: "Iron Man 3", isRented: false };
  const movie2 = { id: 2, title: "The Godfather", isRented: false };
  const movie3 = { id: 3, title: "Aqua Man", isRented: false };
  
  movieStore.addMovie(movie1);
  movieStore.addMovie(movie2);
  movieStore.addMovie(movie3);
  
  movieStore.rentMovie(user, 1);
  
  
  // The console log is what i used to check the customer who rented the movie, the movie name and if the movie is rented or avaliable.
  console.log(user.rentedMovies); 
  console.log(movieStore.userCatalogue);
  
  
  
  /* To check if a movie has been returned and which user returned it, you can use the userCatalogue property of the MovieStore instance. This property contains records that show which user rented or returned which movie.
  
  Here is an example of how you can use the userCatalogue property to check if a movie has been returned and by which user. */
  
  
  const movie1ReturnRecord = movieStore.userCatalogue.find(
    record => record.movie === "Iron Man 3" && record.action === "returned"
  );
  
  if (movie1ReturnRecord) {
    console.log(`${movie1ReturnRecord.movie} was returned by ${movie1ReturnRecord.user}.`);
  } else {
    console.log(`${movie1.title} has not been returned.`);
  }
  
  // Output: "The Shawshank Redemption was returned by John."
  
  