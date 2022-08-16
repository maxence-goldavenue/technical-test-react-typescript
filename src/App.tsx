import React from "react";
import { Pokemon } from "./API";

import "./styles.css";

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

export default function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="search">Search</div>
        <input type="text"></input>
        <div>Power threshold</div>
        <input type="text"></input>
        <div>Count over threshold: </div>
        <div>Min: </div>
        <div>Max: </div>
      </div>
    </div>
  );
}
