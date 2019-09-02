import React from "react";

import Link from "../../Atoms/Link/Link";

function Project({ title, url }) {
  return <Link href={url} target="_blank">{title}</Link>;
}

export default Project;
