import React from 'react';

import Link from '../../Atoms/Link/Link';
import pdf from '../../../cv/Cristina-Llamas-CV.pdf'; // TODO: read this from the json file.
import styled from 'styled-components';
const Heading = styled.h1`
  font-family: 'Untitled Sans', Helvetica, Arial, sans-serif;
  font-size: 72px;
  font-style: normal;
  font-variant-ligatures: none;
  font-weight: 700;
  text-align: center;
  color: white;
`;

const StyledAbout = styled.div`
  background-color: #49c5b6;
`;
function PersonIntro({ name, title, short_bio }) {
  return (
    <StyledAbout>
      <Heading as="h3">{name}</Heading>
      <Heading has="h4">{title}</Heading>
      <p>{short_bio}</p>
      <Link
        href={pdf}
        className="button_link"
        target="_blank"
        linkType="button"
      >
        Download my CV
      </Link>
    </StyledAbout>
  );
}

export default PersonIntro;
