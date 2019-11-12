import React, { useState, useEffect } from 'react';

import dataSource from '../../../data/dataSource.json';
import About from '../../Templates/About';
import ProjectTemplate from '../../Templates/ProjectTemplate';
import Card from '../../Molecules/Card/Card';

const Home = () => {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState([]);
  const [projectTemplate, setProjectTemplate] = useState([]);
  const [featuredWork, setFeaturedWork] = useState({});

  // Used "as" componentDidMount.
  useEffect(() => {
    // Initialise data tree state.
    setData(dataSource.data);
    // Load list of work.
    setProjectTemplate(dataSource.data.projects);
    // Initialise featured project.
    const featuredWork = dataSource.data.work.find(
      ({ featured }) => featured === true,
    );
    setFeaturedWork(featuredWork);
  }, []);

  return (
    <div>
      {data.about && <About {...data.about} />}
      <h2>Featured Project</h2>
      {featuredWork && (
        <Card
          tag={featuredWork.category}
          title={featuredWork.project}
          link={`/work/${featuredWork.id}`}
          picture={featuredWork.picture}
          variation="right"
          description={featuredWork.description}
        />
      )}

      {projectTemplate && <ProjectTemplate items={projectTemplate} />}
    </div>
  );
};

export default Home;
