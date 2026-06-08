import React from "react";
import useFetch from "../Hooks/useFetch";
import Moviecard from "./Moviecard";
import Loader from "../Components/Loader";

import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation"

const MovieRows = ({ title, apipath }) => {
  const { data, loading, isError } = useFetch(apipath);
  console.log(data, "moviedata");
  if (loading) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {data && data.length > 0 ? (
        <div className="movie_section">
          <h2 className="section_title">{title}</h2>
          <Swiper 
          spaceBetween={10} 
          slidesPerView={6} 
          // modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 4,
              },

              1024: {
                slidesPerView: 6,
              },
          }}  >
          <div className="movie_row">
            {data.map((movie) => (
              <SwiperSlide key={movie.id} >
                <Moviecard movie={movie} key={movie.id} />
              </SwiperSlide>
            ))}
          </div>
          </Swiper>
        </div>
      ):(
        <div className="d-flex align-items-center justifiy-content-center vh-100 vw-100">
            Movie Not found
        </div>  
      )  
    }
    </>
  );
};

export default MovieRows;
