import React, { useState, useEffect } from 'react'
import './App.css';
import SearchIcon from './search.svg' ;
import { MovieCard} from './movieCard' ;
// 7fd055a6

//const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=7fd055a6' ;


const movie = 
  {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

  const [movies,setMovies] = useState([]) ;
  const [SearchMovies, setSearchMovies] = useState('') ;

  const searchMovies = async (title) => {
    const response  = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=7fd055a6`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  },[])
  return (
    <div className = "app">
      <h1>Movie Flix  </h1>
      <div className = "search">
        <input 
          placeholder = "Search for Movies"
          value = {SearchMovies}
          onChange = {(e) => {setSearchMovies(e.target.value)}}>
        </input>
        <img src = {SearchIcon} onClick = {() => {searchMovies(SearchMovies)}}></img>
      </div>

      {
        movies.length > 0 ? 
          <div className = "container">
            {
              movies.map((movie) => (<MovieCard movie = {movie} />))
            }
            <MovieCard movie = {movie} />
          </div>
          :
          <div className = "empty">
            <h2> No Movies Found</h2>
          </div>
      }
      <div className = "container">
        <MovieCard movie = {movie} />
      </div>
    </div>
  )
}

export default App