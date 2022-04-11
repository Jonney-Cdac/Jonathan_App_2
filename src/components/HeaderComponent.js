import React, { Component } from "react";
import "../css/HeaderComponent.css";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return (
      <div>
        <header>
          <nav
            className="navbar navbar-expand-lg navbar-light "
            style={{
              backgroundColor: "#109079",
              fontWeight: "bold",
              height: "10vh"
            }}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Company Logo
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="https://lpxsc1.csb.app/contactus"
                    >
                      Contact Us
                    </a>
                  </li>

                  <a
                    className="nav-link active"
                    id="date"
                    aria-current="page"
                    href="#"
                  >
                    Today Date : {date}
                  </a>
                </ul>
              </div>
              <div className="unordered">
                <button type="button" className="btn btn-dark" id="right-btn">
                  Login
                </button>
                <button type="button" className="btn btn-dark" id="right-btn">
                  Register
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export { HeaderComponent };
