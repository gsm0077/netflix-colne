import React from "react";
import requests from "./requests";
import Rows from "./rows/Rows";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import "./App.css";

function App() {
  return <div className="App">
    <Nav/>
    <Banner/>
    <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    <Rows title="Trending" fetchUrl={requests.fetchTrending} />
    <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Rows title="Recommended" fetchUrl={requests.fetchRecommended} />
  </div>;
}

export default App;
