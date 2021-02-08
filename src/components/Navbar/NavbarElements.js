import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "react-dropdown";

import colors from "../../config/colors";

export const Nav = styled.nav`
  background: #f6f6f6;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px calc((100vw - 1200px) / 2);
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const StyledDropdown = styled(Dropdown)`
  border-radius: 6px;

  > div {
    border-radius: 6px;
    background-color: ${colors.grey_f6f6f6};
    border-color: ${colors.grey_e6e6e6};
    color: ${colors.black};
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.terminated};

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: 10px;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: ${colors.white};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.white};
    color: #010606;
  }
`;
