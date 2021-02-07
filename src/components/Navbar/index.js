import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">all campaigns</NavLink>
        <Bars />
        <NavMenu>1d</NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
