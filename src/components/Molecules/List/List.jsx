import React from "react";

import ListItem from "./ListItem";

const List = ({ content, component, className }) => (
  <ul className={className}>
    {content.map((contentItem, index) => (
      <ListItem key={index} item={contentItem} component={component} />
    ))}
  </ul>
);

export default List;
