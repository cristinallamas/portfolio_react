import React from "react";

import Link from '../Atoms/Link/Link';

function About({ name, title, bio, cv_source }) {
  return (
    <div>
      <h2>About</h2>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
      <Link 
        href={`../${cv_source}`}
        className="button_link"
        target="_blank" 
        >
          Download my CV
      </Link>
    </div>
  );
}

export default About;
