import React from "react";

class Commentaire extends React.Component {
  state = {
    texte: "",
  };

  maxCaracteres = 120;

  changerTexte = (event) => {
    this.setState({ texte: event.target.value });
  };

  render() {
    const restants = this.maxCaracteres - this.state.texte.length;

    return (
      <div>
        <textarea
          className="form-control"
          placeholder="Tapez un commentaire..."
          maxLength={this.maxCaracteres}
          value={this.state.texte}
          onChange={this.changerTexte}
        ></textarea>
        <small className="text-muted">{restants} Restants</small>
      </div>
    );
  }
}

export default Commentaire;