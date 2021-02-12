import React, { useState, useEffect } from "react";
import Video from "./video";
import axios from "../axios";
import requests from "../requests";
import { CalendarOutlined } from "@ant-design/icons";
import "./video-detail.css";

function VideoDetail({ SearchResults }) {
  const [movie, setMovie] = useState([]);
  const [Loading, setLoading] = useState(false);

  console.log(SearchResults.length);

  useEffect(() => {
    fetchData();
  }, [SearchResults, Loading]);

  async function fetchData() {
    if (SearchResults.length === 0) {
      const request = await axios.get(requests.fetchPopulair);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    } else {
      setMovie(SearchResults[0]);
      setLoading(true);
    }
  }
  return (
    <>
      <header>
        <div>
        <div >
          <Video film={Loading ? SearchResults[0] : movie} isLarge={false} />
        </div>
          <h1 >
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p>
            {movie?.overview}
          </p>
          
            {movie?.release_date ? (
              <>
                <span>Date de Sortie </span>
                <CalendarOutlined
                  style={{
                    fontSize: "25px",
                  }}
                /> {movie.release_date}
              </>
            ) : null}
        </div>
        
      </header>
    </>
  );
}

export default VideoDetail;
