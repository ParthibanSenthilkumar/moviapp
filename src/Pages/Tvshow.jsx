import React from "react";
import MovieRows from "../Components/MovieRows";
import useFetch from "../Hooks/useFetch";
import Herobanner from "../Components/Herobanner";

const Tvshow = () => {

  let { data,loading }=useFetch("tv/airing_today")

  return (
    <section className="tvshows_section pb-5">
      <div className="container-fluid">

        <Herobanner  data={data} loading={loading} /> 

        <MovieRows title={"Airing Today"} apipath={"tv/airing_today"} />
        <MovieRows title={"On Air"} apipath={"tv/on_the_air"} />
        <MovieRows title={"Top Rated"} apipath={"tv/top_rated"} />
        <MovieRows title={"Popular"} apipath={"tv/popular"} />
      </div>
    </section>
  );
};

export default Tvshow;
