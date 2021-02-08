import React, { useState } from "react";
import styled from "styled-components";

import filters from "../../data/filters.json";
import { GlobalStateValue } from "../../GlobalState";
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
  // eslint-disable-next-line
  const [data, dispatch] = GlobalStateValue();
  const [filterValue, setFilterValue] = useState("all");
  const options = ["All Campaigns"].concat(filters);
  const defaultOption = options[0];

  const onSelect = (e) => {
    const { value } = e;
    setFilterValue(value);

    dispatch({
      type: "FILTER_BY_STATUS",
      value,
    });
  };

  return (
    <>
      <Nav>
        <ItemWrapper>
          <StyledDropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />
          <NavStatus value={filterValue === "All Campaigns" ? "All" : filterValue} />
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
