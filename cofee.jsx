import React, { useState } from "react";
import teaImage from "./teaimg.jpg";
import capoimg from "./capoimg.avif";
import espimg from "./espimg.jpg";
import cofimg from "./cofimg.jpg";
export default function Coffee() {
  const [coffee, setCoffee] = useState("");
  const [coffee1, setCoffee1] = useState("");
  const drinks = [
    "tea",
    <img id="img" src={teaImage} alt={teaImage} />,

    "coffee",
    <img id="img" src={cofimg} alt={teaImage} />,

    "espresso",
    <img id="img" src={espimg} alt={teaImage} />,
    "cappuccino",
    <img id="img" src={capoimg} alt={teaImage} />,
  ];
  const boissons = () => {
    if (drinks.includes(coffee)) {
      setCoffee1(`Vous avez choisi : ${coffee}`);
    } else {
      setCoffee1(`Votre demande : ${coffee} n'est pas disponible`);
    }
  };

  return (
    <>
      <h1 id="name">CofeeShop</h1>

      <div className="map">
        {drinks.map((drink, index) => (
          <div key={index}>
            <p>{drink}</p>
          </div>
        ))}
      </div>

      <div className="header">
        <p>Client</p>
        <input
          type="text"
          placeholder="Enter your order"
          value={coffee}
          onChange={(e) => setCoffee(e.target.value)}
        />
        <button onClick={boissons}>Send</button>
      </div>
      <div className="serveur">
        <h2 id="srv">Serveur</h2>
        <p id="srv">{coffee1}</p>
      </div>
    </>
  );
}
