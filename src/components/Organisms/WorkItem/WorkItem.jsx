import React from 'react';

// import Card from "../../Molecules/Card/Card";
import Link from '../../Atoms/Link/Link';

import styled from 'styled-components';

const Tags = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const Tag = styled.li`
  margin: auto 10px;
`;

// function Work({ project, company, description, technologies, url, category }) {
function WorkItem({
  category,
  project,
  company,
  description,
  technologies,
  url,
  picture,
}) {
  return (
    <React.Fragment>
      {picture && <img alt={company} src={picture} />}
      {category && <h2>{category}</h2>}
      {project && <h1>{project}</h1>}
      {company && <h3>{company}</h3>}
      {description && <p>{description}</p>}
      {technologies && (
        <Tags>
          {technologies.map((item, index) => (
            <Tag key={index}>
              <h5>{item}</h5>
            </Tag>
          ))}
        </Tags>
      )}
      {url && <Link href={url}>Check it out!</Link>}
    </React.Fragment>
  );
}

export default WorkItem;
