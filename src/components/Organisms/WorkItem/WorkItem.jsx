import React from "react";

// import Card from "../../Molecules/Card/Card";
import Link from "../../Atoms/Link/Link";

// function Work({ project, company, description, technologies, url, category }) {
function WorkItem({
  category,
  project,
  company,
  description,
  technologies,
  url
}) {
  return (
    <React.Fragment>
      {category && <h2>{category}</h2>}
      {project && <h1>{project}</h1>}
      {company && <h3>{company}</h3>}
      {description && <p>{description}</p>}
      {technologies && (
        <ul>
          {technologies.map((item, index) => (
            <li key={index}>
              <h5>{item}</h5>
            </li>
          ))}
        </ul>
      )}
      {url && <Link href={url}>Check it out!</Link>}
    </React.Fragment>
  );
}

export default WorkItem;
