import React from "react";
import avatar from "../images/myavatartwo.png";
// import { BsGithub } from "react-icons/bs";

function HomePage() {
  return (
    <>
      <div class="jumbotron">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-1">
          <div className="childOne">
            <h1 className="display-4 hi ">Hi,</h1>
            <h2 className="lead">My name is Tatiana,</h2>

            <p className="paragraph">I code and design Beautiful websites.</p>
            <p className="about pb-3">
              I'm located in united Kingdom with a background in customer
              experience and a strong commitment to learning. <br />
              Excel at creating user-friendly applications by combining my
              creative and problem-solving skills. <br />
              Recognized for my quick-thinking and meticulous approach,
              especially when working on challenging projects.
            </p>
            <div className="btn-border">
              <a className=" btn-one filter" href="/projects" role="button">
                My Work
              </a>
            </div>
            <div className="btn-border-two">
              <a className="btn-two" href="/ontacts" role="button">
                Contact me
              </a>
            </div>
          </div>
          <div className="avatar ">
            <img src={avatar} alt="My avatar" className="avatarImage"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
