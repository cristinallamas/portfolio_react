import React from "react";

import Work from "./Work";

const WorkList = ({ items }) => {
  // console.log(items)

  const workItems = items.map((item, index) => (

    <li key={index}>
      <Work {...item} />
    </li>
  ));

  return (
    <React.Fragment>
      <h2>Work</h2>
      <ul>{workItems}</ul>
    </React.Fragment>
  );
};

export default WorkList;
