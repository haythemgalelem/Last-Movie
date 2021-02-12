import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Video({ film, isLarge }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    LoadUrlVideo(film);
  }, [film]);

  const optsLarge = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const optsSmall = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const SizeYoutube = () => {
    return isLarge ? optsLarge : optsSmall;
  };

  const LoadUrlVideo = () => {
    movieTrailer(film?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ textAlign: "right" }}>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={SizeYoutube()} />}
    </div>
  );
}

export default Video;
