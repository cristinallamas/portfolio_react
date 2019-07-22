// Dependencies.
import React, { useState, useEffect } from "react";
// Local imports.
import dataSource from "./data/dataSource.json";
import About from "./components/Templates/About";
import ProjectList from "./components/Templates/ProjectList";
import WorkList from "./components/Templates/WorkList";

function App() {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [], jobs: [], about: {} });

  // Used "as" componentDidMount.
  useEffect(() => {
    setData(dataSource.data);
  }, []);

  return (
    <React.Fragment>
      {data.about && <About {...data.about} />}
      {data.work && <ProjectList items={data.projects} />}
      {data.work && <WorkList items={data.work} />}
    </React.Fragment>
  );
}

export default App;
