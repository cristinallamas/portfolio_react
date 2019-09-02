import React from "react";

import Card from "../../Molecules/Card/Card";
import Link from "../../Atoms/Link/Link";

function Work({ project, company, description, technologies, url, category }) {
  return (
    <React.Fragment>
      <Card
        tag={category}
        title={project}
        // link={url}
        // picture="https://picsum.photos/id/2/500/350"
        variation="right"
        description={description}
      />
      <div className="item-details">
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
      </div>
    </React.Fragment>
  );
}

export default Work;
