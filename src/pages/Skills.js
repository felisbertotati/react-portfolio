import React from "react";

function Skills() {
  return (
    <>
      <div className="row">
        <h2 className="skills">My Skills</h2>
        <div className="mySkills">
          <div className="container  card-border-one">
            <div className="card-one">
              <h2 className="Card-title pt-3">Front End Developer</h2>
              <p className="card-body">
                I design and develop webpages and applications that are
                responsive and user-friendly for easy access on different
                devices.
              </p>
              <h4 className="skills-title">Skills</h4>
              <p>
                HTML, CSS, JS, bootstrap, jQuery, React, API and Test driven
                development.
              </p>
              <h4 className="Tools pt-3">Tools</h4>
              <p>VScode and GitHub.</p>
            </div>
          </div>
          <div className="container card-border-one">
            <div className="card-one">
              <h2 className="Card-title-desgin pt-3">Design</h2>
              <p className="card-body-design">
                I find solutions for users to have a good experience. With my
                designs I make it easy and simple to use.
              </p>
              <h4 className="skills-title">Skills</h4>
              <p>User experience UI Design</p>
              <h4 className="Tools">Tools</h4>
              <p>Figma, Adobe XD</p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="btn-skills"
        href="https://drive.google.com/file/d/101O4b6jTtpgmfiIEZtbO869rpanCsJjS/view?usp=sharing"
        role="button"
      >
        My Resume
      </a>
    </>
  );
}

export default Skills;
