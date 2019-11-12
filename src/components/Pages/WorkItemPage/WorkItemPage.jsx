import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import dataSource from '../../../data/dataSource.json';
import WorkItem from '../../Organisms/WorkItem/WorkItem';

const WorkPage = props => {
  // Declare a new state variable, which we'll call "data".
  const currentWorkID = props.match.params.id;
  const [workData, setWorkData] = useState({});
  const currentWorkItem = dataSource.data.work[currentWorkID - 1];

  // Used "as" componentDidMount.
  useEffect(() => {
    setWorkData(currentWorkItem);
  }, [currentWorkItem]);

  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work Item</title>
      </Helmet>
      {workData && <WorkItem {...workData} />}
    </div>
  );
};

export default WorkPage;
