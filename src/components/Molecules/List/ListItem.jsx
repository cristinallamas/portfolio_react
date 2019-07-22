import React from "react";

const ListItem = ({ component, item, className }) => {
  const ComponentName = component;
  if (component) {
    return (
      <li className={className}>
        <ComponentName {...item} />
      </li>
    );
  }

  return <li className={className}>{item}</li>;
};

export default ListItem;
