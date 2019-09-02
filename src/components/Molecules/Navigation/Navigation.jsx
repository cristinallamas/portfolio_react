import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";

const Navigation = ({ id, navClassName, items }) => (
  <div id={id} className={navClassName}>
    <nav
      role="navigation"
      itemScope="itemscope"
      itemType="http://schema.org/SiteNavigationElement"
    >
      <ul>
        {items.map((item, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  </div>
);

export default Navigation;
