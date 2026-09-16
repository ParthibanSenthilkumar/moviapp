import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { errorToast } from "./Toaster";

const Herobanner = ({ data, loading }) => {
  const [trailer, setTrailer] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <Loader />
      </div>
    );
  }
  if (!data?.length) return null;
  const item = data[Math.floor(Math.random() * data.length)];
  const handleTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}`,
      );
      const result = await res.json();
      const movietrailer = result.results.find(
        (video) => video.site === "YouTube" && video.type === "Trailer",
      );
      if (movietrailer) {
        setTrailer(movietrailer.key);
      } else {
        errorToast("Trailer not available");
      }
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <section className="banner">
        <div
          className="banner_bg kenburns-top"
          style={{
            backgroundImage: `url(
              https://image.tmdb.org/t/p/original${item?.backdrop_path}
            )`,
          }}
        ></div>

        <div className="banner_contents">
          <h1 className="banner_title">{item?.title}</h1>

          <div className="banner_buttons">
            <button className="banner_button" onClick={handleTrailer}>
              Play
            </button>

            <Link
              className="banner_button"
              to={`/home/moviedetails/${item?.id}`}
            >
              More Info
            </Link>
          </div>

          <p className="banner_description">
            {item?.overview?.slice(0, 250)}...
          </p>
        </div>

        <div className="banner_fadeBottom"></div>
      </section>

      {trailer && (
        <div className="trailer_modal">
          <div className="trailer_content">
            <button className="close_but" onClick={() => setTrailer(null)}><i className="fa-solid fa-x"></i></button>

            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
              title="Movie Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Herobanner;
