import React from "react";

function Work({ project, company, description, technologies }) {
  return (
    <React.Fragment>
      <h3>{project}</h3>
      <h4>{company}</h4>
      <p>{description}</p>
      <ul>
        {technologies.map((item, index) => (
          <li key={index}>
            <h5>{item}</h5>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Work;
