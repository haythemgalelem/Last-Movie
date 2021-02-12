import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Video from "./video";

function VideoListItem({ info }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  function infoModal() {
    Modal.success({
      width: 1000,
      icon:"",
      content: <Video film={info} />,
      okText: 'Fermer',
      okType: 'danger',
      onOk() {},
    });
  }

  return (
  <div onClick={() => infoModal()}>
    <div className="container">
      <div className="card flex-row flex-wrap">
          <div className="card-header border-0">
            <img 
              width='85px'
              src={
                "https://image.tmdb.org/t/p/original/" + info.poster_path ||
                info.backdrop_path
              }
              alt="this movie don't have and img" />
            </div>
            <div className="card-block px-2">
            <h4 className="card-title">{info.title}</h4>
            <p className="card-text"><DateRangeIcon />{info.release_date}</p>
            <ReactStars
              value={info.vote_average}
              edit={false}
              count={7}
              size={24}
              activeColor="#ffd700"/>
        </div>
      </div>
    </div>
  </div>
    

  );
}


export default VideoListItem;
