import React, { useState } from "react";
import "./App.css";
import Serachbar from "../components/search-bar";
import VideoDetail from "./video-detail";
import VideoList from "../components/video-list";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [TextValue, setTextValue] = useState([]);
  return (
    <div className="App">
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-12" style={{ marginBottom: "20px" }}>
          <Serachbar SendSearchQuery={(Listmovies) => setTextValue(Listmovies)} />
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <VideoDetail SearchResults={TextValue} />
        </div>
        <div class="col-md-4">
          <VideoList SearchResults={TextValue} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
