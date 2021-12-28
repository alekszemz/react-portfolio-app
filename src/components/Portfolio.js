import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

// Font awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  ////////////////////////////////////////////////////////////
  // Popup box for Netflix project
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fuga
          distinctio delectus sequi laborum natus iste commodi at ullam alias.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
        {", "}
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // Popup box for cityGuide project
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="City Guide App Project..."
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fuga
          distinctio delectus sequi laborum natus iste commodi at ullam alias.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
        {", "}
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App Project...",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // Popup box for Netflix project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fuga
          distinctio delectus sequi laborum natus iste commodi at ullam alias.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
        {", "}
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // Popup box for Netflix project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager Project..."
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse fuga
          distinctio delectus sequi laborum natus iste commodi at ullam alias.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
        {", "}
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://google.com")}
        >
          https://google.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  //////////////////////////////////////////////////////////////////////
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        {/* Project One */}
        <div className="image-box-wrapper">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* Project Two */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="City Guide Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Project Three */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* Project Four */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
