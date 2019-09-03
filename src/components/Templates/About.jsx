import React from "react";

import Link from '../Atoms/Link/Link';
import pdf from '../../cv/Cristina-Llamas-CV.pdf';

function About({ name, title, bio, cv_source }) {
  console.log('cv_source',cv_source);
  return (
    <div>
      <h2>About</h2>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{bio}</p>
      <Link 
        href={`../${cv_source}`} // TODO: This link reference is not working.
        className="button_link"
        target="_blank" 
        >
          Download my CV (doesn't work)
      </Link>
      <Link 
        href={pdf} // TODO: This link reference is not working.
        className="button_link"
        target="_blank" 
        >
          Download my CV (this one works)
      </Link>
    </div>
  );
}

export default About;
