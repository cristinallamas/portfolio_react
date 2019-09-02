import React from "react";
import Link from "../../Atoms/Link/Link";
import Navigation from "../../Molecules/Navigation/Navigation";
import { Link as RouteLink } from "react-router-dom";

const Header = ({ navigation, slogan }) => (
  <header className="header">
    <div className="header__logo">
      <RouteLink to="/">{slogan}</RouteLink>
    </div>

    {navigation && (
      <Navigation
        id="header__main-menu"
        items={navigation}
        navClassName="header__navigation"
      />
    )}
  </header>
);

export default Header;
