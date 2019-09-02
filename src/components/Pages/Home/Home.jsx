import React, { useState, useEffect } from "react";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import About from "../../Templates/About";
import ProjectList from "../../Templates/ProjectList";
import WorkList from "../../Templates/WorkList";
import Work from "../../Organisms/WorkItem/WorkItem";

const Home = () => {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [], jobs: [], about: {} });

  const featuredWork = data.work
    ? data.work.filter(item => item.featured === true)
    : {};
  {
    console.dir(featuredWork[0]);
  }

  // Used "as" componentDidMount.
  useEffect(() => {
    setData(dataSource.data);
  }, []);

  return (
    <div>
      {data.header && <Header {...data.header} />}
      {data.about && <About {...data.about} />}
      <h2>Latest Project</h2>
      {data.work && <Work {...featuredWork[0]} />}
      {data.work && <ProjectList items={data.projects} />}

    </div>
  );
};

export default Home;
