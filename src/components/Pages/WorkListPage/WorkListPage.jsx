import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import WorkList from "../../Templates/WorkList";

const Work = () => {
  // Declare a new state variable, which we'll call "data".
  const [projectList, setProjectList] = useState([]);
  const [navigation, setNavigation] = useState([]);


  // Used "as" componentDidMount.
  useEffect(() => {
    setNavigation(dataSource.data.header);
    setProjectList(dataSource.data.work);

  }, []);

  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work</title>
      </Helmet>
      {navigation && <Header {...navigation} />}
      {projectList && <WorkList items={projectList} />}
    </div>
  );
};

export default Work;
