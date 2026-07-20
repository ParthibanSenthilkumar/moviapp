import React from "react";
import Header from "./Header";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Herobanner = ({data,loading}) => {
  // const firstMovie = data?.[0];
  // console.log(firstMovie, "data banner_data");
  if(!data.length) return null
  const item=data[Math.floor(Math.random()* data.length)]

  if(loading){
    return(
        <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
            <Loader />
        </div>
    )
  }

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
            <button className="banner_button">Play</button>

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
    </>
  );
};

export default Herobanner;
