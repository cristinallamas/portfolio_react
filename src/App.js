// Dependencies.
import React from "react";
// import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import WorkListPage from "./components/Pages/WorkListPage/WorkListPage";
import WorkItemPage from "./components/Pages/WorkItemPage/WorkItemPage";

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
        {/* TODO: bring header here */}
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={WorkListPage} />
        <Route exact path="/work/:id" component={WorkItemPage}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
