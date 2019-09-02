// Dependencies.
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Local imports.
// import dataSource from "../../../data/dataSource.json";

import Home from "./components/Pages/Home/Home";
import Work from "./components/Pages/Work/Work";

function App() {
  // // Declare a new state variable, which we'll call "data".
  // const [data, setData] = useState({ projects: [], jobs: [], about: {} });

  // // Used "as" componentDidMount.
  // useEffect(() => {
  //   setData(dataSource.data);
  // }, []);

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

        {/* <Route
          exact path="/"
          render={props => <Home props={data} />}
        /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Router>
    </React.Fragment>
  );
}

export default App;
