import React from "react";
import styled from "styled-components";
import { FaEye, FaUserFriends, FaDatabase } from "react-icons/fa";

import colors from "../config/colors";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.dark_grey};
  font-size: 12px;
  width: 100%;
  justify-content: space-between;
`;

const StyledWarning = styled.div`
  color: ${colors.danger};
`;

const SpreadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  color: ${colors.dark_grey};
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

const CardIcon = styled.div`
  font-size: 13px;
  align-items: center;
  display: flex;

  svg {
    font-size: 16px;
    margin-right: 5px;
  }
`;

const CardOnHold = ({ onResubmit }) => {
  return (
    <SpreadWrapper>
      <StyledWarning>This card is on hold</StyledWarning>
      <Button onClick={onResubmit}>Resubmit</Button>
    </SpreadWrapper>
  );
};

const CardMini = () => {
  return (
    <SpreadWrapper>
      <CardIcon>
        <FaDatabase />
        $12,000
      </CardIcon>
      <CardIcon>
        <FaUserFriends /> 400
      </CardIcon>
      <CardIcon>
        <FaEye /> 400
      </CardIcon>
    </SpreadWrapper>
  );
};

const CardFooter = ({ status = "pending", isOnHold = false, onResubmit }) => {
  return <Container>{isOnHold ? <CardOnHold onResubmit={onResubmit} /> : <CardMini />}</Container>;
};

export default CardFooter;
