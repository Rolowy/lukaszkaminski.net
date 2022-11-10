import React, { useState } from "react";
import "./Navigation.css";

import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 8rem;
`;

const List = styled(NavLink)`
  display: inline-flex;
  margin: 0 2rem;
  font-weight: 500;
  color: rgb(8 3, 31);
`;

function Navigation() {
  const [mobile, setMobile] = useState(true);

  const handleIcon = () => {
    setMobile(!mobile);
  };

  return (
    <div className="container">
      <Nav>
        <Link to="/">
          <Logo src="./../../images/logo.png" alt="logo" />
        </Link>
        <div className="nav-mobile-button" onClick={handleIcon}>
          <ion-icon name={mobile ? "menu-outline" : "close-outline"}></ion-icon>
        </div>
        <ul className={mobile ? "nav-list" : "nav-list active"}>
          <List to="/" className="nav-list-link">
            Home
          </List>
          <List to="/portfolio" className="nav-list-link">
            Portfolio
          </List>
          <List to="/contact" className="nav-list-link">
            Contact
          </List>
        </ul>
      </Nav>
    </div>
  );
}

export default Navigation;