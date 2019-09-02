import React from "react";
import Link from "../../Atoms/Link/Link";
import { Link as RouteLink } from "react-router-dom";
import isExternal from 'is-url-external';

const ProcessedLink = ({url, title}) => {
  if(isExternal(url)){
    return <Link href={url}>{title}</Link>
  }
  else{
    return <RouteLink to={url}>{title}</RouteLink>
  }
};
const NavigationItem = ({ item }) => (
  <li className="navigation--item">
    <ProcessedLink {...item}/>
  </li>
);

export default NavigationItem;
