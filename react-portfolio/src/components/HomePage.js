import React from "react";
import avatar from "../images/myavatar.png";
function HomePage() {
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">Hi,</h1>
        <h2 class="lead">My name is Tatiana,</h2>

        <p>I code and design Beautiful websites.</p>
        <a class="btn btn-primary btn-lg " href="#About" role="button">
          About me
        </a>
        <a class="btn btn-primary btn-lg" href="#Skills" role="button">
          My Skills
        </a>
        <img src={avatar}></img>
      </div>
    </>
  );
}

export default HomePage;
