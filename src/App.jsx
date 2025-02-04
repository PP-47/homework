import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const apikey = 'b1f8474699224ee081d207b868d8e8cb';

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    try {
      const res = await axios.get(url);
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <h1 className="title">🎬 Popular Movies</h1>
      <div className="movies">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="movie"
          >
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
