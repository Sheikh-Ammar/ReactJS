import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Row.css";
import Youtube from "react-youtube";
// import movieTrailer from "movie-trailer";

const Img_base_url = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  let url = props.fetchURL;

  // CODE RUN ON SPECIFIC CONDITION
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(null, { tmdbId: movie.id })
  //       .then((url) => {
  //         // https://www.youtube.com/watch?v=XtMThy80KqU
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       })
  //       .catch((error) => console.error());
  //   }
  // };

  return (
    <>
      <div className="row">
        <h2>{props.title}</h2>

        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <>
                <img
                  // onClick={() => handleClick(movie)}
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

        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
