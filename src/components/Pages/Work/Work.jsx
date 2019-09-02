import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import dataSource from "../../../data/dataSource.json";
import Header from "../../Organisms/Header/Header";
import WorkList from "../../Templates/WorkList";

const Work = () => {
  // Declare a new state variable, which we'll call "data".
  const [data, setData] = useState({ projects: [], jobs: [], about: {} });

  // Used "as" componentDidMount.
  useEffect(() => {
    setData(dataSource.data);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Cristina Llamas - Work</title>
      </Helmet>
      {data.header && <Header {...data.header} />}
      {data.work && <WorkList items={data.work} />}
    </div>
  );
};

export default Work;
