import React from "react";
import styled from "styled-components";

import colors from "../config/colors";
import { statuses } from "../config/constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.dark_grey};
  font-size: 13px;
  justify-content: "space-between";
`;

const StyledIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: ${({ color }) => (color ? statuses[`${color}`] : "red")};
`;

const CardFooter = ({ status = "pending" }) => {
  return (
    <Container>
      {status} <StyledIcon color={status} />{" "}
    </Container>
  );
};

export default CardFooter;
