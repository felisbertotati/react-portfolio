import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <a className="logo" href="/">
          Tatiana Leitao
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
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Home
            </a>

            <a className="nav-link " href="/skills">
              Skills
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
