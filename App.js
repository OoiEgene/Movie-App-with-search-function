import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';

const App = () => {
	const [movies, setMovies] = useState([        
    {"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
    {"Title":"Superman Returns","Year":"2006","imdbID":"tt0348150","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},
    {"Title":"Superman","Year":"1978","imdbID":"tt0078346","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"},    
    {"Title":"Superman II","Year":"1980","imdbID":"tt0081573","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"} , 
    {"Title":"Superman III","Year":"1983","imdbID":"tt0086393","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
    {"Title":"Superman IV: The Quest for Peace","Year":"1987","imdbID":"tt0094074","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},
    {"Title":"Superman/Batman: Apocalypse","Year":"2010","imdbID":"tt1673430","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    {"Title":"Superman/Batman: Public Enemies","Year":"2009","imdbID":"tt1398941","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZDc5NTFiMzgtZWJiOS00N2M1LWJmOGYtZmNjMzFhMzcxZjRiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
    {"Title":"Lois & Clark: The New Adventures of Superman","Year":"1993–1997","imdbID":"tt0106057","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"},
    {"Title":"Superman: Doomsday","Year":"2007","imdbID":"tt0934706","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMmJhN2RmMTUtMDMzMy00YTQ4LWEyZDMtOGM1NWVmMDE3NTBjXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"}]
    );
  
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {
      const url =  "http://www.omdbapi.com/?&apikey=28f4dae9";
  
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };
  
    useEffect(() => {
      getMovieRequest();
    }, []);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
      <MovieList movies={movies} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      <div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
};
export default App;