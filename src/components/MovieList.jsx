import { MovieCard } from './MovieCard'

export const MovieList = ({ movies, urlPoster, onMovieClick }) => {
    if (!movies || movies.length === 0) {
        return <div className='on-movie'> ไม่พบข้อมูลภาพยนต์ </div>
    }
    return (
        <div className='content' id='content'>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    urlPoster={urlPoster}
                    onMovieClick={onMovieClick}
                />
            ))}
        </div>
    )
}

export default MovieList;