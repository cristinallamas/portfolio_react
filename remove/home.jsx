import React, { useState, useEffect, Fragment } from 'react';

import dataSource from '../data/dataSource.json';
// import PersonIntro from '../components/Organisms/PersonIntro/PersonIntro';
// import ProjectTemplate from '../components/Templates/ProjectTemplate';
// import Card from '../components/Molecules/Card/Card';

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
    <Fragment>
      <h1>hola</h1>
      {/* {data.about && <PersonIntro {...data.about} />} */}
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
    </Fragment>
  );
};

export default Home;
