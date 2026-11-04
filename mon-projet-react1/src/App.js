import React from "react";
import "./App.css";

function App() {

  const Fruits = [
    {
      nom: "Pomme",
      image: "/images/pomme.jpg"
    },
    {
      nom: "Orange",
      image: "/images/orange.jpg"
    },
    {
      nom: "Pastèque",
      image: "/images/pasteque.jpg"
    },
    {
      nom: "Raisin",
      image: "/images/raisin.jpg"
    },
    {
      nom: "Cerises",
      image: "/images/cerises.jpg"
    },
    {
      nom: "Ananas",
      image: "/images/ananas.jpg"
    },
    {
      nom: "Fraise",
      image: "/images/fraise.jpg"
    },
    {
      nom: "Poire",
      image: "/images/poire.jpg"
    }
  ];

  return (
    <div className="container">

      <h1>Liste des fruits</h1>

      <div className="fruits-container">

        {Fruits.map((fruit, index) => (

          <div className="fruit-card" key={index}>

            <img
              src={fruit.image}
              alt={fruit.nom}
            />

            <h2>{fruit.nom}</h2>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;