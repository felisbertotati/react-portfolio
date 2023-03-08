import React from "react";
import myWork from "../myprojects.json";

function ProjectsPages() {
  return (
    <div className="container">
      <div className="row">
        {myWork.map((work) => (
          <div className="col-md-4" key={work.id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-text">{work.name}</h3>
                {/* <img className="card-img">{work.image}</img> */}
                <p className="card-text">{work.about}</p>
                <a href="/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPages;
