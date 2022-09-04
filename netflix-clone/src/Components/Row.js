import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Row.css";

const Img_base_url = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  let url = props.fetchURL;

  // CODE RUN ON SPECIFIC CONDITION
  useEffect(() => {
    // IF[] run once when row load and do not load again
    async function fetchData() {
      const request = await axios.get(url);
      // URL LOOK: https://api.themoviedb.org/3/discover/tv?api_key=f758907605bef6fa1289e3de26d27a4e&with_networks=213
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>

        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <>
                <img
                  key={movie.id}
                  src={`${Img_base_url}${
                    props.isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  className={`row__poster ${
                    props.isLargeRow && "row__large_poster"
                  }`}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
