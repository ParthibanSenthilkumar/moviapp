import React, { useEffect, useState } from "react";
import { fetchData } from "../Services/Api";
import { errorToast } from "../Components/Toaster";

const useFetch = (apipath,queryTerm="") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const movieData = async () => {
      try {
        setLoading(true);

        const loadMovies = await fetchData(apipath,queryTerm);
        console.log(loadMovies,"loaded movies");
        setData(loadMovies);
      } catch (error) {
        errorToast(error.message);

        setIsError(error.message);
      } finally {
        setLoading(false);
      }
    };

    movieData();
  }, [apipath,queryTerm]);

  return { data, loading, isError };
};

export default useFetch;
