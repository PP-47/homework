

export const MovieCard = ({ movie, urlPoster, onMovieClick }) => {
    if (!movie) return null;

    const cardStyle = {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        // width: '220px',
        // padding: '15px',
        // margin: '15px',
        // backgroundColor: '#f9f9f9',
        // borderRadius: '12px',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
        // transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
    };

    const posterStyle = {
        // borderRadius: '12px',
        width: '100%',
        height: 'auto',
        display: 'block',
        // marginBottom: '10px',
        // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
    };

    const titleStyle = {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        // marginTop: '10px',
        // marginBottom: '5px',
        // lineHeight: '1.4',
    };

    const rateContainerStyle = {
        position: 'absolute',
        // top: '10px',
        // right: '10px',
        // backgroundColor: '#ff6f61',
        // color: '#ffffff',
        borderRadius: '50%',
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // fontSize: '1rem',
        // fontWeight: 'bold',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={cardStyle} onClick={() => {onMovieClick}}>
            <div className="movie-card" onClick={() => onMovieClick(movie)}>
                <div className="rate-container" style={rateContainerStyle}>
                    <h2 className="rate-text">{movie.vote_average}</h2>
                </div>
                <h2 className="movie-title" style={titleStyle}>{movie.title.substring(0, 24)}</h2>
                <img src={`${urlPoster}${movie.poster_path}`} alt={movie.title}
                    className="movie-poster"  style={posterStyle}
                />

            </div>
        </div>
    )
}
export default MovieCard;