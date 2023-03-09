import React, { useRef, useEffect } from "react";
import myWork from "../myprojects.json";
import { Carousel } from "react-bootstrap";

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
              <span className="carousel-control-prev-icon" />
            </button>
          </div>
          <div className="col-10">
            <Carousel ref={carouselRef} interval={3000}>
              {groupedWork.map((group) => (
                <Carousel.Item key={group[0].id}>
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
                            <div className="btn-projects-border">
                              <a href="/" className="btn-projects">
                                Go somewhere
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
              <span className="carousel-control-next-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPages;
