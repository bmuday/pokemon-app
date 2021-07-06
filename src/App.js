import React, { useState, useEffect } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import axios from "axios";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    });
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
        goToNextPage={nextPageUrl ? goToNextPage : null}
      />
    </>
  );
}
