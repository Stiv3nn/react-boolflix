import { useState } from "react";
import axios from "axios";
import BarraDiRicerca from "./components/BarraDiRicerca";
import FilmList from "./components/FilmList";

const API_KEY = "3d2f7b4506c7c6af335517dd5f8c25b0";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const lingua = {
  en: "gb",
  it: "it",
  fr: "fr",
  es: "es",
  de: "de",
  ja: "jp",
  ko: "kr",
};

function App() {
  const [results, setResults] = useState([]);

  const searchMedia = async (query) => {
    if (!query) return;
    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
      );
      const tvResponse = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`
      );
      const combinedResults = [
        ...movieResponse.data.results,
        ...tvResponse.data.results,
      ];
      setResults(combinedResults);
    } catch (error) {
      console.error("Errore nella chiamata API", error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>BoolFlix</h1>
        <BarraDiRicerca onSearch={searchMedia} />
      </header>
      <FilmList movies={results} imageBaseUrl={IMAGE_BASE_URL} />
    </div>
  );
}

export default App;
