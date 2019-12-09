import React, { useState, useEffect } from 'react';
import dataSource from '../data/dataSource.json';

import Link from '../components/Atoms/Link/Link';
import pdf from '../cv/Cristina-Llamas-CV.pdf'; // TODO: read this from the json file.
import styled from 'styled-components';
const Heading = styled.h1`
  font-family: 'Untitled Sans', Helvetica, Arial, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-variant-ligatures: none;
  font-weight: 700;
  text-align: center;
  // color: white;
`;

// const StyledAbout = styled.div`
//   background-color: #49c5b6;
// `;
function About() {
  const [aboutData, setAboutData] = useState({});

  // Used "as" componentDidMount.
  useEffect(() => {
    setAboutData(dataSource.data.about);
  }, []);

  return (
    <div>
      <Heading as="h3">A bit about me</Heading>
      {/* <Heading has="h4">{aboutData.title}</Heading> */}
      <p>{aboutData.bio}</p>
      <img alt="Profile pic" src={aboutData.image} />
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
