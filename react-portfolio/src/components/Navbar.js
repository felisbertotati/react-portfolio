import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="/">
          TL
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="/">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-link" href="/about">
              About me
            </a>
            <a className="nav-link" href="/projects">
              My Work
            </a>
            <a className="nav-link " href="/contacts">
              Contact me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
