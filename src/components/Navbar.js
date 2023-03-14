import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="logo" to="/">
          Tatiana Leitao
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link " to="/skills">
              Skills
            </Link>
            <Link className="nav-link" to="/projects">
              My Work
            </Link>
            <Link className="nav-link " to="/contacts">
              Contact me
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
