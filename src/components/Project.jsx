import React from "react";

function Project({title,url}) {
  return (
    <a href={url}>{title}</a>
  );
}

export default Project;
