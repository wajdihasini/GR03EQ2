
import { useState } from "react";

function Activite1() {
  const [nom, setNom] = useState("");

  return (
    <div>
      <h1>Activité 1 : Input</h1>

      <label>Saisir votre nom complet :</label>

      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrez votre nom complet"
      />

      <h2>Bonjour {nom}</h2>
    </div>
  );
}

export default Activite1;
