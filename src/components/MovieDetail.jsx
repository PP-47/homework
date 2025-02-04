import React from "react";

export const MovieDetail = ({ movie, onClose, handlePosterClick }) => {
    const urlPoster = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="movie-detail-overlay">
            <div className="movie-detail-content">
                <button className="close-button" onClick={onClose}
                >x</button>

                <div className="movie-detail-grid">
                    <div className="movie-poster-container">
                        <img
                            src={`${urlPoster}${movie.poster_path}`}
                            alt={movie.title}
                            className="detail-poster"
                            onClick={handlePosterClick}
                            style={{ cursor: "pointer" }}
                        />
                        <div className="watch-trailer-hint">Click to search on YouTube</div>
                    </div>

                    <div className="movie-info">
                        <h2 className="detail-title">{movie.title}</h2>

                        <div className="info-grid">
                            <div className="info-item">
                                <span className="info-label">Rating:</span> 
                                <span className="info-value">
                                    {movie.vote_average.toFixed(1)}
                                </span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Release Date:</span> 
                                <span className="info-value">
                                    {movie.release_date}
                                </span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Language:</span> 
                                <span className="info-value">
                                    {movie.original_language.toUpperCase()}
                                </span>
                            </div>

                            <div className="info-item">
                                <span className="info-label">Popularity:</span> 
                                <span className="info-value">
                                    {Math.round(movie.popularity)}
                                </span>
                            </div>
                        </div>

                        <div className="overview">
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;