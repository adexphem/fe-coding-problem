import React from "react";
import styled from "styled-components";
import { FaEdit, FaRegCheckCircle, FaShareAlt } from "react-icons/fa";

import colors from "../../config/colors";

const Container = styled.div`
  display: none;
  width: 25px;
  height: 25px;
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 3px;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 0;
  margin: 10px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: none;
`;

const StyledLi = styled.li`
  svg {
    margin-right: 10px;
  }
`;

const Options = () => {
  return (
    <StyledUl>
      <StyledLi>
        <FaEdit /> Edit
      </StyledLi>
      <StyledLi>
        <FaRegCheckCircle /> Publish
      </StyledLi>
      <StyledLi>
        <FaShareAlt /> Share
      </StyledLi>
    </StyledUl>
  );
};

const MoreOptions = () => {
  return (
    <Container>
      <FaEdit />
      <Options />
    </Container>
  );
};

export default MoreOptions;
