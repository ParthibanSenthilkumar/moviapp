import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favmoviecontext } from "../Context/CreateContextfavmobie";

const Moviecard = ({ movie, isFavoritePage }) => {
  const { favMovie, setFavMovie } = useContext(Favmoviecontext);
 
  const isFavorited = favMovie.some((item) => item.id === movie.id);

  const favoritesHandler = (id) => {
    if (isFavorited) {
      let updatefilter = favMovie.filter((d) => d.id !== id);
      setFavMovie(updatefilter);  
    } else {
      setFavMovie([...favMovie, movie]);
    }
  };
  const handleRemove = (id) => {
    let updatefilter = favMovie.filter((d) => d.id !== id);
    setFavMovie(updatefilter);
  };

  return (
    <div className="movie_item position-relative">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie_overlay">
        <h3 className="movie_title">{movie.title}</h3>

        <p className="movie_desc">{movie.overview}</p>

        <div className="card_button d-flex align-items-center justify-content-center gap-3">
          {isFavoritePage ? (
            <button
              className="movie_btn bg-warning"
              onClick={() => handleRemove(movie.id)}
            >
              Remove
            </button>
          ) : (
    <button
              className={isFavorited ? "movie_btn" : "movie_btn bg-warning"}
              onClick={()=>favoritesHandler(movie.id)}
            >
              {isFavorited ? "Favorite" : "AddFavorite"}
            </button>
          )}

          <Link className="movie_btn" to={`/home/moviedetails/${movie.id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
