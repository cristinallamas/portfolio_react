import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import WorkItem from "../../Organisms/WorkItem/WorkItem";

const WorkPage = (props) => {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [], jobs: [], about: {} });
  const currentWorkID = props.match.params.id;
  const [workData, setWorkData] = useState({});


  // Used "as" componentDidMount.
  useEffect(() => {
    setData(dataSource.data);
    setWorkData(dataSource.data.work[currentWorkID - 1]);
  }, []);


  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work Item</title>
      </Helmet>
      {data.header && <Header {...data.header} />}
      {data.work && <WorkItem {...workData}/>}
    </div>
  );
};

export default WorkPage;
