import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';

function App() {
  return (
    <div className="app">
      <HomeScreen/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;
