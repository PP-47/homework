import React from 'react'
import NavBar from '../components/NavBar'
import '../App.css'
import { useEffect, useState } from 'react'
import {Pagination} from '../components/Pagination'
import { MovieList } from '../components/MovieList'
import { fetchMovies } from '../services/movieService'
import MovieDetail from '../components/MovieDetail'

export const MainMovies = () => {
  const [year, setYear] = useState("2024");
  const [Movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectMovie, setSelectMovie] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const urlPoster = "https://image.tmdb.org/t/p/w500";

  const handleYearChange = (event) => {
    const selectYear = event.target.value;
    setYear(selectYear);
    setPage(1);
  }

  const handlaPageChange = (p) => {
    setPage(p);
    window.scrollTo(0, 0);
  }

  const handleMovieClick = (m) => {
    setSelectMovie(m);
  }

  const handleCloseDetail = () => {
    setSelectMovie(null);
  }

  useEffect(() => {
    const loadMovie = async () => {
      setIsloading(true);
      setError(null);


      try {
        const data = await fetchMovies(year, page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(" Failed to load movies...", error);
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };

    loadMovie()

  }, [year, page])

  if (error) {
    return <div className="error-message"> {error} </div>
  }

  const handlePosterClick = (movieData) => {
    const searchQuery = `${movieData.title} official trailer ${movieData.release_date?.split('-')[0] || ''}`;
    const encodedQuery = encodeURIComponent(searchQuery);
    window.open(`https:\\www.youtube.com/results?search_query=${encodedQuery}`, '_blank');
  }

  return (
    // <div>🎬 MainMovies</div>
    <div className='main-container'>
      <NavBar year={year} onYearChange={handleYearChange} />
      {isloading ? (
        <div className="loading"> Loading movies...</div>
      ) : (
        <>
          <MovieList
            movies={Movies}
            urlPoster={urlPoster}
            onMovieClick={handleMovieClick}
          />

          <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlaPageChange}
          />
        </>
      )}

      {selectMovie && (
        <MovieDetail
          movie={selectMovie}
          onClose={handleCloseDetail}
          handlePosterClick={() => handlePosterClick
            (selectMovie)
          }
        />
      )}
    </div>
  )
}
export default MainMovies;
