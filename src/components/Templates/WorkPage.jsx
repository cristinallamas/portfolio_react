import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../Templates/Layout';
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
import SEO from '../Templates/seo';

const WorkPage = ({ data }) => {
  return (
    <Layout title={data.work.project}>
      <SEO title="All posts" />
      <Heading as="h1">{data.work.project}</Heading>
      <h2>{data.work.company}</h2>
      <h3>{data.work.category}</h3>
      <p>{data.work.description}</p>
      <Img
        fixed={data.work.pic.url.childImageSharp.fixed}
        alt="Cristina Llamas Picture"
      />
    </Layout>
  );
};

export default WorkPage;

export const pageQuery = graphql`
  query WorkQuery($UID: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    work: workJson(uid: { eq: $UID }) {
      fields {
        slug
      }
      category
      company
      description
      pic {
        url {
          id
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      project
      technologies
      url
    }
  }
`;
