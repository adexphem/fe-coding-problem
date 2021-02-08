import React from "react";
import styled from "styled-components";
import { FaList } from "react-icons/fa";

import colors from "../../config/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.dark_grey};
  text-transform: capitalize;
  font-size: 16px;
`;

const StyledIcon = styled(FaList)`
  margin: 0 10px 0 20px;
`;

const NavStatus = ({ status = "pending" }) => {
  return (
    <Container>
      <StyledIcon color={status} /> {status}
    </Container>
  );
};

export default NavStatus;
