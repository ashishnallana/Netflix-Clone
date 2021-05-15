import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import requests from "./components/request";
import Row from "./components/Row";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="WEBFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <div className="myText">
        <h4>@ashish.nallana.dev</h4>
      </div>
    </div>
  );
}

export default App;
