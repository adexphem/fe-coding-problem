import React from "react";
import styled from "styled-components";
import { FaList } from "react-icons/fa";

import colors from "../../config/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 20px;
  color: ${colors.dark_grey};
  text-transform: capitalize;
  font-size: 16px;
`;

const StyledCalendar = styled.div`
  min-width: 250px;
`;

const StyledDay = styled.div`
  background-color: ${colors.danger};
  color: ${colors.white};
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 50px;
`;

const NavCalendar = ({ status = "3d" }) => {
  return (
    <Container>
      <StyledCalendar>Calendar</StyledCalendar>
      <StyledDay>{status}</StyledDay>
    </Container>
  );
};

export default NavCalendar;
