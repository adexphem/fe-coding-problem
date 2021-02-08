import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

import colors from "../../config/colors";

const StyledIcon = styled(FaSearch)`
  color: ${colors.dark_grey};
  font-size: 28px;
`;

const NavSearch = () => {
  return <StyledIcon />;
};

export default NavSearch;
