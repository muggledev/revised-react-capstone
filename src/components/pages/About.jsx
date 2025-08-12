import React from "react";
import "../../styles/pages/about.scss";
import capstoneImage from "../../assets/capstone-2.webp";

function About() {
  return (
    <div>
      <div className="about-hero-image">
        <img src={capstoneImage} alt="Stone Arch" />
      </div>
      <div className="capstone-process">
        <h1>Rachelle's Remix on the Capstone Process</h1>
        <h2>Mistakes Made, Lessons Learned, the Rachelle Way™</h2>
      </div>
      <div className="front-end-journey">
        <h1>Rachelle's Front-End Journey:</h1>
        <h2>Real Experiences, Real Lessons</h2>
      </div>
      <div className="my-favorite-coding-language">
        <h1>A Match Made in {`<Code>`}</h1>
      </div>
    </div>
  );
}

export default About;
