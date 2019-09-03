import React, { useState, useEffect } from "react";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import About from "../../Templates/About";
import ProjectList from "../../Templates/ProjectList";
import Card from "../../Molecules/Card/Card";

const Home = () => {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [featuredProject, setFeaturedProject] = useState({});

  // Used "as" componentDidMount.
  useEffect(() => {
    // Initialise data tree state.
    setData(dataSource.data);
    // Load list of work.
    setProjectList(dataSource.data.work);
    // Initialise featured project.
    const featuredProject = dataSource.data.work.find(
      item => item.featured === true
    );
    setFeaturedProject(featuredProject);
  }, []);
  
  return (
    <div>
      {data.header && <Header {...data.header} />}
      {data.about && <About {...data.about} />}
      <h2>Latest Project</h2>
      {featuredProject && (
        <Card
          tag={featuredProject.category}
          title={featuredProject.project}
          link={`/work/${featuredProject.id}`}
          // picture="https://picsum.photos/id/2/500/350"
          variation="right"
          description={featuredProject.description}
        />
      )}

      {projectList && <ProjectList items={projectList} />}
    </div>
  );
};

export default Home;
