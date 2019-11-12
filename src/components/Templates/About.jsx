import React from 'react';

import Link from '../Atoms/Link/Link';
import pdf from '../../cv/Cristina-Llamas-CV.pdf'; // TODO: read this from the json file.

function About({ name, title, bio }) {
  return (
    <div>
      <h2>About</h2>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
      <Link
        href={pdf}
        className="button_link"
        target="_blank"
        linkType="button"
      >
        Download my CV
      </Link>
    </div>
  );
}

export default About;
