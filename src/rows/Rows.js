import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchdata();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="container">
        <div className="row_posters">
          {movies.map((movie, i) => {
            return (
              <img
                className={`rows_poster ${isLargeRow && "rows_posterLarge"}`}
                key={i}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
                alt={movie.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Rows;
