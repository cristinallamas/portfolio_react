import React, { Fragment } from "react";

import Work from "../Organisms/WorkItem/WorkItem";
import List from "../Molecules/List/List";

const WorkList = ({ items }) => {
  // Reverse array to get latest first. bleh.
  items = items.reverse();

  return (
    <Fragment>
      <h2>Work</h2>
      <List content={items} component={Work} />
    </Fragment>
  );
};

export default WorkList;
