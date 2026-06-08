import React, { useContext } from "react";
import { Favmoviecontext } from "../Context/CreateContextfavmobie";
import Moviecard from "../Components/Moviecard";

const Favorites = () => {
  const { favMovie, setFavMovie } = useContext(Favmoviecontext);

  console.log(favMovie, "favmovie");

  return (
    <>
      <section className="Favorites_section">
        <div className="container-fluid">
          <div className="movie_row">
            {favMovie && favMovie.length > 0 ? (
              favMovie.map((movie) => (
                <Moviecard key={movie.id} movie={movie} isFavoritePage={true} />
              ))
            ) : (
              <p className="text-center overview w-50 mx-auto mt-5">
                  No favorite movies added yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Favorites;
