import React, { Fragment } from 'react';

import Project from '../Organisms/Project/Project';
import List from '../Molecules/List/List';

const ProjectTemplate = ({ items }) => {
  return (
    <Fragment>
      <h2>Side Projects / Playgrounds</h2>
      <List content={items} component={Project} />
    </Fragment>
  );
};

export default ProjectTemplate;
