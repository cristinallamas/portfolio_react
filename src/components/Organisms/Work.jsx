import React from "react";

import Card from '../Molecules/Card/Card'

function Work({ project, company, description, technologies, url }) {
  return (
    <React.Fragment>
      
      <Card 
        title={project} 
        link={url}
        >
        <h4>{company}</h4>
        <p>{description}</p>
        <ul>
          {technologies.map((item, index) => (
            <li key={index}>
              <h5>{item}</h5>
            </li>
          ))}
        </ul>
      </Card>

    </React.Fragment>
  );
}

export default Work;
