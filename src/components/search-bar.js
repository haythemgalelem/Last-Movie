import React, { Fragment, useState } from "react";
import axios from "../axios";
import requests from "../requests";

function SearchBar(props) {
  const [show, handleshow] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const [MoviesFind, setMoviesFind] = useState([]);
 

  const HandlerSearch = async () => {
    if (SearchQuery.length > 0) {
      const response = await axios.get(
        requests.sQP1 + SearchQuery +requests.sQP2
      );
      setMoviesFind(response.data.results);
      props.SendSearchQuery(response.data.results);
    }
  };

  return (
    <Fragment>
      <div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Recherche un Film ..."
            className="fw"
          ></input>
          <button
            className="film_button"
            onClick={() => {
              HandlerSearch();
            }}
          >
            Recherche
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchBar;
