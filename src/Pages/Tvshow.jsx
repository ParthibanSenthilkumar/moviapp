import React from "react";
import MovieRows from "../Components/MovieRows";

const Tvshow = () => {
  return (
    <section className="tvshows_section">
      <div className="container-fluid">
        <MovieRows title={"Airing Today"} apipath={"tv/airing_today"} />
        <MovieRows title={"On Air"} apipath={"tv/on_the_air"} />
        <MovieRows title={"Top Rated"} apipath={"tv/top_rated"} />
        <MovieRows title={"Popular"} apipath={"tv/popular"} />
      </div>
    </section>
  );
};

export default Tvshow;
