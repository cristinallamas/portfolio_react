import React, { Fragment } from "react";

import Card from "../Molecules/Card/Card";

const WorkList = ({ items }) => {
  // Reverse array to get latest first. bleh.
  items = items.reverse();

  return (
    <Fragment>
      <h2>Work</h2>
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Card
                tag={item.category}
                title={item.project}
                link={`/work/${item.id}`}
                variation="right"
                description={item.description}
              />
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default WorkList;
