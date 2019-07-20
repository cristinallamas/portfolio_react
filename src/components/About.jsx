import React from "react";

function About({ name, title, bio, cv_source }) {
  return (
    <div>
      <h2>About</h2>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
      <a href={`../${cv_source}`}>Download my CV</a>
    </div>
  );
}

export default About;
