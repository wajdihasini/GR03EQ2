import React, { useState } from 'react';

function Activite1() {
  const [nom, setNom] = useState('');
  const [affichageNom, setAffichageNom] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setAffichageNom(nom);
    alert(`Nom_complet: ${nom}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Activité 1 : Input</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom complet: {' '}
          <input 
            type="text" 
            value={nom} 
            onChange={(e) => setNom(e.target.value)} 
            placeholder="Veuillez saisir votre nom complet"
          />
        </label>
        <button type="submit">Afficher</button>
      </form>

      {affichageNom && (
        <p>Nom complet: {affichageNom}</p>
      )}
    </div>
  );
}

export default Activite1;