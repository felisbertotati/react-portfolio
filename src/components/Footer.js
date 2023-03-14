import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function footer() {
  return (
    <>
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/felisbertotati"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tatiana-leitao-7b07b51a1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/tatianaleitao21"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="rights">© 2023 Tatiana Leitao. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default footer;
