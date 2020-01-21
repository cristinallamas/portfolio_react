import React, { useState, useEffect } from 'react';
// import dataSource from '../../data/dataSource.json';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// import Link from '../Atoms/Link/Link';
// import pdf from '../../cv/Cristina-Llamas-CV.pdf'; // TODO: read this from the json file.
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
  const data = useStaticQuery(graphql`
    query Profile {
      avatar: file(relativePath: { eq: "cristina-lavender.jpg" }) {
        childImageSharp {
          fixed {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
            originalName
            src
            srcSet
            width
            height
          }
        }
      }
      cv: file(extension: { eq: "pdf" }) {
        id
        publicURL
      }
      bio: dataJson {
        short_bio
        name
        image
        title
      }
    }
  `);
  console.log(data);
  return (
    <div>
      {/* <Heading as="h3">A bit about me</Heading> */}
      <Heading has="h4">{data.bio.name}</Heading>
      <Heading has="h5">{data.bio.title}</Heading>
      <p>{data.bio.short_bio}</p>
      <Img
        fixed={data.avatar.childImageSharp.fixed}
        alt="Cristina Llamas Picture"
      />

      <a href={data.cv.publicURL} download="Cristina-Llamas-CV">
        Download my CV (.pdf)
      </a>
    </div>
  );
}

export default About;
// const data = useStaticQuery(graphql`
//   query {
//     file(relativePath: { eq: "images/cristina-lavender.jpg" }) {
//       childImageSharp {
//         # Specify a fixed image and fragment.
//         # The default width is 400 pixels
//         fixed {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `);
