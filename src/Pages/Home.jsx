import React from "react";
import MovieRows from "../Components/MovieRows";
import Herobanner from "../Components/Herobanner";

const Home = ({ title, apipath }) => {
  return (
    <>
    <Herobanner />
      <section className="movie_List mb-5">
        <div className="container-fluid">
          <MovieRows title="Trending Now" apipath="trending/movie/week" />

          <MovieRows title="Top Rated" apipath="movie/top_rated" />

          <MovieRows
            title="Action Movies"
            apipath="discover/movie?with_genres=28"
          />

          <MovieRows
            title="Comedy Movies"
            apipath="discover/movie?with_genres=35"
          />

          <MovieRows
            title="Horror Movies"
            apipath="discover/movie?with_genres=27"
          />

          <MovieRows
            title="Romance Movies"
            apipath="discover/movie?with_genres=10749"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
