import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';
import Layout from '../components/Templates/Layout';

// import dataSource from '../../../data/dataSource.json';
import WorkListTemplate from '../components/WorkListTemplate';
// import WorkListBlock from '../components/Organisms/WorkListBlock/WorkListBlock';

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

const Work = () => {
  const workQuery = useStaticQuery(graphql`
    query Work {
      workList: allWorkJson {
        edges {
          node {
            uid
            category
            company
            description
            featured
            project
            technologies
            url
            pic {
              url {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(workQuery);

  const workArray = workQuery.workList.edges;
  // console.log(workArray);

  return (
    <Layout>
      <Helmet>
        <title>Cristina Llamas - Work</title>
      </Helmet>
      <Heading as="h3">Work</Heading>
      {workArray && <WorkListTemplate items={workArray} />}
      {/* <WorkListBlock /> */}
    </Layout>
  );
};

export default Work;
