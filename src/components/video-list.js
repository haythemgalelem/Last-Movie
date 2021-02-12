import React, { useState, useEffect } from "react";
import requests from "../requests";
import axios from "../axios";
import "react-multi-carousel/lib/styles.css";
import ListGroup from 'react-bootstrap/ListGroup'
import VideoListItem from "../containers/video-list-item";

function VideoList({ SearchResults }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, [SearchResults]);

  async function fetchData() {
    if (SearchResults.length === 0) {
      const request = await axios.get(requests.fetchPopulair);
      const list = request.data.results;
      const size = 6;
      const movies = list.slice(0, size);
      setMovie(movies);
    } else {
      const list1 = SearchResults;
      const size1 = 6;
      const movies1 = list1.slice(0, size1);
      setMovie(movies1);
    }
  }

  return (
    <div>
      <h3>Vous aimerez aussi ...</h3>
      <ListGroup>
        {movie.map((film, index) => (
          <ListGroup.Item>
          <VideoListItem info={film} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default VideoList;
