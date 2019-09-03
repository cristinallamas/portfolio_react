// Dependencies.
import React from "react";
// import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Templates/Layout";

function App() {

  return (
    <React.Fragment>
      <Router>
        <Helmet>
          <title>Cristina Llamas - Web Developer based in London</title>
          <meta
            name="description"
            content="A little bit about me and my work"
          />
        </Helmet>
        <Layout />
      </Router>
    </React.Fragment>
  );
}

export default App;
