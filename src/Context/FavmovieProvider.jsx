import React, { useEffect, useState } from "react";
import { Favmoviecontext } from "./CreateContextfavmobie";

const FavmovieProvider = ({ children }) => {
  const [favMovie, setFavMovie] = useState(() => {
    const storedMovie = localStorage.getItem("favm");
    return storedMovie ? JSON.parse(storedMovie) : [];
  });

  useEffect(() => {
    localStorage.setItem("favm", JSON.stringify(favMovie));
  }, [favMovie]);
  return (
    <>
      <Favmoviecontext.Provider value={{ favMovie, setFavMovie }}>
        {children}
      </Favmoviecontext.Provider>
    </>
  );
};

export default FavmovieProvider;
