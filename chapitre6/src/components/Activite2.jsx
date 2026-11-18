
import { useState } from "react";

function Activite2() {
  const [nom, setNom] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [commentaireAffiche, setCommentaireAffiche] = useState("");

  return (
    <div>
      <h1>Activité 2 : Textarea</h1>

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
    </div>
  );
}

export default Activite2;
