import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      <h1>This is the pokemon API</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
