import React from "react";

import Project from "./Project";

const ProjectList = ({ items }) => {
  const projectItems = items.map((item, index) => (
    <li key={index}>
      <Project {...item} />
    </li>
  ));

  return (
    <React.Fragment>
      <h2>Side Projects</h2>
      <ul>{projectItems}</ul>
    </React.Fragment>
  );
};

export default ProjectList;
