import React from "react";
import CaseCocher from "./CaseCocher";
import "./App.css"; // le fichier CSS doit être importé dans App.js

function App() {
  return (
    <div className="css-liste">
      <CaseCocher />
      <CaseCocher />
      <CaseCocher />
      <CaseCocher />
    </div>
  );
}

export default App;
