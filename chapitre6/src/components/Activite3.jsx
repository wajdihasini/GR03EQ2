
import { useState } from "react";

function Activite3() {
  const [nom, setNom] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [commentaireAffiche, setCommentaireAffiche] = useState("");
  const [saveur, setSaveur] = useState("Noix de coco");

  return (
    <div>
      <h1>Activité 3 : Select</h1>

      <label>Nom complet :</label>

      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Veuillez saisir votre nom complet"
      />

      <button onClick={() => alert("Nom complet : " + nom)}>
        Afficher
      </button>

      <br /><br />

      <label>Commentaire</label>
      <br />

      <textarea
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        rows="5"
        cols="40"
      />

      <br />

      <button onClick={() => setCommentaireAffiche(commentaire)}>
        Envoyer
      </button>

      <p>{commentaireAffiche}</p>

      <br />

      <label>Choisissez votre saveur préférée :</label>
      <br /><br />

      <select
        value={saveur}
        onChange={(e) => setSaveur(e.target.value)}
      >
        <option value="Pamplemousse">Pamplemousse</option>
        <option value="Noix de coco">Noix de coco</option>
        <option value="Mangue">Mangue</option>
      </select>

      <button onClick={() => alert("Votre saveur préférée : " + saveur)}>
        Choisir
      </button>
    </div>
  );
}

export default Activite3;
