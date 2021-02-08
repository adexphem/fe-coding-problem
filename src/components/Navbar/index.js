import React from "react";
import styled from "styled-components";

import filters from "../../data/filters.json";
import { Nav, Bars, NavMenu, StyledDropdown } from "./NavbarElements";
import NavStatus from "./NavStatus";
import NavSearch from "./NavSearch";
import NavCalendar from "./NavCalendar";
import "react-dropdown/style.css";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  const options = ["All Campaigns"].concat(filters);
  const defaultOption = options[0];

  const onSelect = (e) => {
    console.log("e ", e);
  };

  return (
    <>
      <Nav>
        <ItemWrapper>
          <StyledDropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
          <NavStatus />
        </ItemWrapper>
        <Bars />
        <NavMenu>
          <ItemWrapper>
            <NavSearch />
            <NavCalendar />
          </ItemWrapper>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
