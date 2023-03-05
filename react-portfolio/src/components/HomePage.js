import React from "react";
import avatar from "../images/myavatar.png";
function HomePage() {
  return (
    <>
      <div class="jumbotron">
        <div className="container childOne">
          <h1 className="display-4 hi ">Hi,</h1>
          <h2 className="lead">My name is Tatiana,</h2>

          <p className="paragraph">I code and design Beautiful websites.</p>
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
        <div className="Container avatar">
          <img src={avatar} alt="My avatar"></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;
