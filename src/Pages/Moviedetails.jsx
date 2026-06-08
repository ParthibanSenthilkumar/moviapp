import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { fetchData } from "../Services/Api";
import axios from "axios";
import { errorToast } from "../Components/Toaster";
import { Link } from "react-router-dom";
import { Favmoviecontext } from "../Context/CreateContextfavmobie";

const Moviedetails = () => {
  const [movieData, setmovieData] = useState(null);
  console.log(movieData, "selected movie data");

  const {favMovie,setFavMovie}=useContext(Favmoviecontext)

  const API_key = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3`;
  let { id } = useParams();
  const url = `${BASE_URL}/movie/${id}?api_key=${API_key}`;
   console.log(url, "url");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let res = await axios.get(url);
        console.log(res.data, "data");
        setmovieData(res.data);
      } catch (error) {
        errorToast(error.message);
      }
    };
    fetchMovie();
  }, [url]);

  const favorites= favMovie.find(
    (item) => item.id === movieData?.id
  );            

const handleFavorites = (id) => {
  if(favorites ){
  const delefunc = favMovie.filter(
    (item) => item.id !== id
  );
  setFavMovie(delefunc)
  }
  else{
  setFavMovie([...favMovie, movieData]);
  }
};

  return (
    <>
    <section className="movie_info "> 
      <Container fluid>
        <div className="moviedetails py-5" style={{
          backgroundImage:`url(
          https://image.tmdb.org/t/p/original${movieData?.backdrop_path} 
          )`,
          backgroundPosition:"top center"
        }}>
        <Row className="align-items-center">
          <Col lg={6} className="text-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
              alt={movieData?.title}
              className="img-fluid detail-img rounded"
            />
          </Col>

          <Col lg={6} className="right-side">
            <h3 className="card-title">{movieData?.title}</h3>

            <h5>{movieData?.tagline}</h5>

            <p>
              {movieData?.genres?.map((genre) => (
                <span key={genre.id} className="badge bg-secondary  me-2">
                  {genre.name}
                </span>
              ))}
            </p>

            <p>
              Status:
              <span> {movieData?.status} </span>| Release Date:
              <span> {movieData?.release_date} </span>
            </p>

            <p>
              Budget:
              <span>${movieData?.budget?.toLocaleString()}</span>
            </p>

            <p>
              Runtime:
              <span> {movieData?.runtime}</span> minutes
            </p>

            <p>
              Ratings:
              <span>{movieData?.vote_average?.toFixed(2)}</span>
            </p>

            <Button
              as={Link}
              to={`https://www.imdb.com/title/${movieData?.imdb_id}/`}
              target="_blank"
            >
              Check on IMDB
            </Button>
            <Button className={favorites?"btn bg-danger ms-2":"btn bg-warning ms-2"} onClick={()=>handleFavorites(movieData.id)} >{favorites?"Remove Favorite":"Add Favorite"}  </Button>
          </Col>
        </Row>

        <div className="overview">
          <p>
            <span className="fw-bold">Overview : </span>
            {movieData?.overview || "---"}
          </p>
        </div>
        </div>
      </Container>
       </section>
    </>
  );
};

export default Moviedetails;
