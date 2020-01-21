// Dependencies.
import React from 'react';
// import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Layout from '../components/Templates/Layout';
import { createGlobalStyle } from 'styled-components';
// import Home from './home';
// import About from './about';
// import SEO from '../components/seo';
import About from '../components/Templates/About';
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Roboto', sans-serif;
  }
`;

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

export default () => (
  <React.Fragment>
    <Helmet>
      <title>Cristina Llamas - Web Developer based in London</title>
      <meta
        name="description"
        content="A little bit about me and my work"
      />
    </Helmet>

    <GlobalStyles />
    <Layout title="home">
      {/* <Heading as="h2">Cristina Llamas</Heading> */}

      {/* <Header title="Home Page">Cristina Llamas</Header> */}
      {/* {data.about && <PersonIntro {...data.about} />} */}
      <About />
      <h2>Featured Project</h2>
      {/* {featuredWork && (
        // <Card
        //   tag={featuredWork.category}
        //   title={featuredWork.project}
        //   link={`/work/${featuredWork.id}`}
        //   picture={featuredWork.picture}
        //   variation="right"
        //   description={featuredWork.description}
        // />
      )} */}
      {/* {projectTemplate && <ProjectTemplate items={projectTemplate} />} */}

      {/* <Helmet title={'Home Page'} /> */}
      {/* <Home /> */}
    </Layout>
  </React.Fragment>
);
