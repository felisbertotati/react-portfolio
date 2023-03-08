import React from "react";
import avatar from "../images/myavatartwo.png";
// import { BsGithub } from "react-icons/bs";

function HomePage() {
  return (
    <>
      <div class="jumbotron">
        <div className="container childOne">
          <h1 className="display-4 hi ">Hi,</h1>
          <h2 className="lead">My name is Tatiana,</h2>

          <p className="paragraph">I code and design Beautiful websites.</p>
          <p className="about pb-3">
            I'm located in united Kingdom with a background in customer
            experience and a strong commitment to learning. <br />
            Excel at creating user-friendly applications by combining my
            creative and problem-solving skills. <br />
            Recognized for my quick-thinking and meticulous approach, especially
            when working on challenging projects.
          </p>
          <div className="btn-border">
            <a className=" btn-one filter" href="#About" role="button">
              About me
            </a>
          </div>
          <div className="btn-border-two">
            <a className="btn-two" href="#Skills" role="button">
              My Skills
            </a>
          </div>
        </div>
        <div className="Container avatar ">
          <img src={avatar} alt="My avatar" className="avatarImage"></img>
        </div>
        <div className="icons"></div>
      </div>
      <footer>
        <p className="rights">© 2023 Tatiana Leitao. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default HomePage;
