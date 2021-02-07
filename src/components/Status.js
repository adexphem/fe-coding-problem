import React from "react";
import styled from "styled-components";

import colors from "../config/colors";
import { statuses } from "../config/constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors["grey_c5c5c5"]};
  text-transform: capitalize;
  font-size: 13px;
`;

const StyledIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${({ color }) => (color ? statuses[`${color}`] : "red")};
`;

const Status = ({ status = "pending" }) => {
  return (
    <Container>
      {status} <StyledIcon color={status} />{" "}
    </Container>
  );
};

export default Status;
