import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function HeaderSection({ homeCheck, getClick }) {
  const goHome = () => {
    getClick(true);
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md navDiv">
      <div className="container-fluid">
        <AnchorLink className="navbar-brand">
          <img
            src="assets/img/logo.png"
            className="img-fluid"
            width="100"
            alt="Logo"
          />
        </AnchorLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <span
                className="nav-link"
                onClick={goHome}
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
            </li>
            {homeCheck ? (
              <li className="nav-item" role="presentation">
                <AnchorLink className="nav-link" href="#howTo">
                  How to use
                </AnchorLink>
              </li>
            ) : (
              ""
            )}
            <li className="nav-item" role="presentation">
              <AnchorLink className="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSection;
