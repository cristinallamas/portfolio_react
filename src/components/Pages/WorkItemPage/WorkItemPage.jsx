import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import WorkItem from "../../Organisms/WorkItem/WorkItem";

const WorkPage = (props) => {

  // Declare a new state variable, which we'll call "data".
  // const [data, setData] = useState({ projects: [], jobs: [], about: {} });
  const currentWorkID = props.match.params.id;

  const [workData, setWorkData] = useState({});
  const [navigation, setNavigation] = useState([]);

  const currentWorkItem = dataSource.data.work[currentWorkID - 1];

  // Used "as" componentDidMount.
  useEffect(() => {
    setNavigation(dataSource.data.header);
    setWorkData(currentWorkItem);
  }, [currentWorkItem]);


  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work Item</title>
      </Helmet>
      {navigation && <Header {...navigation} />}
      {workData && <WorkItem {...workData}/>}
    </div>
  );
};

export default WorkPage;
