import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Banner.css";

function Banner(props) {
  const [movies, setMovies] = useState([]);
  let url = props.fetchURL;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, [props.fetchURL]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          bcakgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movies?.title || movies?.name || movies?.original_nam}
          </h1>

          <div className="banner-butttons">
            <button type="button" className="banner-btn">
              Play
            </button>
            <button type="button" className="banner-btn">
              My List
            </button>
          </div>

          <h1 className="banner-des">{truncate(movies?.overview, 150)}</h1>
        </div>

        <div className="banner-fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
