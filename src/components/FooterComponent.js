import React, { Component } from "react";
import "../css/FooterComponent.css";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted" style={{ textAlign: "center" }}>
            All Rights Reserved 2020 @Jonathan
          </span>
          <span className="text-muted"></span>
        </footer>
      </div>
    );
  }
}

export { FooterComponent };
