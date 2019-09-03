import React, { useState, useEffect } from "react";
import Header from "../Organisms/Header/Header";
import { Route } from "react-router-dom";

import dataSource from "../../data/dataSource.json";
import Home from "../Pages/Home/Home";
import WorkListPage from "../Pages/WorkListPage/WorkListPage";
import WorkItemPage from "../Pages/WorkItemPage/WorkItemPage";

const Layout = () => {
  const [navigation, setNavigation] = useState([]);

  // Used "as" componentDidMount.
  useEffect(() => {
    setNavigation(dataSource.data.header);
  }, []);

  return (
    <div>
      {navigation && <Header {...navigation} />}
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={WorkListPage} />
      <Route exact path="/work/:id" component={WorkItemPage} />
    </div>
  );
};

export default Layout;
