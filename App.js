import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';



const App = () => {
  const [movies,setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

const getMovieRequest = async () =>{
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=24b7e5d1`
  
  const respons = await fetch(url);
  const responseJson = await respons.json();

 if (responseJson.Search){
  setMovies(responseJson.Search)
 }
};

useEffect(() => {
  getMovieRequest();
}, [searchValue]);

  return <div className ='container-fluid movie-app'>
              <div className=' d-flex align-items-center m-4 mb-4'>
                <MovieListHeading heading = "Movies"/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
              </div>
              <div className="d-flex justify-content-space-arround flex-wrap-nowwrap">
                <MovieList movies = {movies}/>
              </div>
              
        
        </div>
}

export default App;
