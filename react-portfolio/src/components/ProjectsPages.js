import React from "react";
import myWork from "../myprojects.json";

function ProjectsPages() {
  return (
    <div className="container">
      <div className="row">
        {myWork.map((work) => (
          <div className="col-md-4 pt-3" key={work.id}>
            <div className="card m-4">
              <div className="card-body">
                <h3 className="card-text">{work.name}</h3>
                {/* <img className="card-img">{work.image}</img> */}
                <p className="card-text">{work.about}</p>
                <div className="btn-projects-border">
                  <a href="/" class="btn-projects">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPages;
