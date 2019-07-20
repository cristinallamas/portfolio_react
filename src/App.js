import React, { useState, useEffect } from 'react';

import dataSource from './data/dataSource.json';
import About from './components/About';
import ProjectList from './components/ProjectList.jsx';
import WorkList from './components/WorkList.jsx';


function App() {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [],jobs:[],about:{} });
  
  // Used "as" componentDidMount.
  useEffect(() => {
    // console.log(dataSource.data);
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
