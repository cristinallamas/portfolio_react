// Dependencies.
import React from 'react';
// import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/Templates/Layout';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Roboto', sans-serif;
  }
`;

export default () => (
  <React.Fragment>
    <Router>
      <Helmet>
        <title>Cristina Llamas - Web Developer based in London</title>
        <meta
          name="description"
          content="A little bit about me and my work"
        />
      </Helmet>
      <GlobalStyles />
      <Layout />
    </Router>
  </React.Fragment>
);
