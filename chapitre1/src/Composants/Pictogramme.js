import React from "react";
import Icone from "./Icone";

class Pictogramme extends React.Component {
  render() {
    return (
      <div>
        <Icone />
        <hr />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.actionAimer}
        >
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          &nbsp;Aimer
        </button>
      </div>
    );
  }
}

export default Pictogramme;
