import React from "react";
import "./App.css";

import Pictogramme from "./Composants/Pictogramme";
import Commentaire from "./Composants/Commentaire";

class App extends React.Component {
  state = {
    message: "Bonne découverte des composants React",
  };

  // Challenge : le clic sur "Aimer" change le message
  changerMessage = () => {
    this.setState({ message: "Premier défi réussi" });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img
                    src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"
                    className="rounded img-thumbnail me-3"
                    width="80"
                    height="70"
                    alt="developpeur"
                  />
                  <h1 className="text-primary">Débuter avec React</h1>
                </div>

                <p className="mt-3">{this.state.message}</p>

                <Pictogramme actionAimer={this.changerMessage} />
              </div>

              <div className="card-footer">
                <Commentaire />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
