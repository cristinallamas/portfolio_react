import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import dataSource from '../../../data/dataSource.json';
import WorkTemplate from '../../Templates/WorkTemplate';

const Work = () => {
  // Declare a new state variable, which we'll call "data".
  const [projectList, setProjectList] = useState([]);

  // Used "as" componentDidMount.
  useEffect(() => {
    setProjectList(dataSource.data.work);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work</title>
      </Helmet>
      {projectList && <WorkTemplate items={projectList} />}
    </div>
  );
};

export default Work;
