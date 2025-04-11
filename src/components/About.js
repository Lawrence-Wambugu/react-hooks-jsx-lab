// src/components/About.js
import React from "react";
import { image } from "../data/data";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        Hello! I am a passionate web developer, always eager to learn new
        technologies and improve my skills.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
