import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <>
      <div>This is about page...</div>
      <Link to="/">Home</Link>
    </>
  );
}

export default About;
