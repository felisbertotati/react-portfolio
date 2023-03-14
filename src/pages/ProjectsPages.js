import React, { useRef, useEffect } from "react";
import myWork from "../myprojects.json";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

function ProjectsPages() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        carouselRef.current.prev();
      } else if (event.key === "ArrowRight") {
        carouselRef.current.next();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const groupedWork = myWork.reduce((result, item, index) => {
    if (index % 3 === 0) {
      result.push(myWork.slice(index, index + 3));
    }
    return result;
  }, []);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  return (
    <div className="wrapper-projects">
      <div className="container">
        <div className="row">
          <div className="col-1 align-self-center">
            <button className="btn btn-link" onClick={handlePrevClick}>
              <FaArrowLeft color="#4d455d" size={24} />
            </button>
          </div>
          <div className="col-10">
            <Carousel ref={carouselRef} interval={3000} controls={false}>
              {groupedWork.map((group) => (
                <Carousel.Item key={group.id}>
                  <div className="row">
                    {group.map((work) => (
                      <div className="col-md-4 pt-3" key={work.id}>
                        <div className="card m-4 border-card-box">
                          <div className="card-body">
                            <h3 className="card-title">{work.name}</h3>
                            <img
                              className="card-img"
                              src={work.image}
                              alt="My work images"
                            ></img>
                            <p className="card-text">{work.about}</p>
                            <div className="btn-container">
                              <div className="btn-projects-border">
                                <a
                                  href={work.url}
                                  className="btn-projects"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Go somewhere
                                </a>
                              </div>

                              <a
                                href={work.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub
                                  size={30}
                                  className="card-icon mb-5 "
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-1 align-self-center">
            <button className="btn btn-link" onClick={handleNextClick}>
              <FaArrowRight size={24} color="#4d455d" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPages;
