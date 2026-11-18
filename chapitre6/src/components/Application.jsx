
import { useState } from "react";

function Application() {
  const [nom, setNom] = useState("");
  const [saveur, setSaveur] = useState("Noix de coco");
  const [commentaire, setCommentaire] = useState("");
  const [resultat, setResultat] = useState(null);

  const envoyer = (e) => {
    e.preventDefault();

    setResultat({
      nom: nom,
      saveur: saveur,
      commentaire: commentaire
    });
  };

  return (
    <div>
      <h1>Application : Formulaire complet</h1>

      <form onSubmit={envoyer}>

        <label>Nom complet :</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <br /><br />

        <label>Choisissez votre saveur préférée :</label>

        <select
          value={saveur}
          onChange={(e) => setSaveur(e.target.value)}
        >
          <option value="Pamplemousse">Pamplemousse</option>
          <option value="Noix de coco">Noix de coco</option>
          <option value="Mangue">Mangue</option>
        </select>

        <br /><br />

        <label>Commentaire :</label>
        <br />

        <textarea
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
          rows="5"
          cols="30"
        />

        <br /><br />

        <button type="submit">Envoyer</button>

      </form>

      {resultat && (
        <div>
          <h2>Informations saisies :</h2>
          <p>Nom complet : {resultat.nom}</p>
          <p>Saveur préférée : {resultat.saveur}</p>
          <p>Commentaire : {resultat.commentaire}</p>
        </div>
      )}

    </div>
  );
}

export default Application;
