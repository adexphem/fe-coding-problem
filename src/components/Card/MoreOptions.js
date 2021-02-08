import React from "react";
import styled from "styled-components";
import { FaEdit, FaRegCheckCircle, FaShareAlt, FaTrashAlt } from "react-icons/fa";

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
  box-shadow: rgb(0 0 0 / 10%) 10px 10px 20px -10px;
`;

const StyledLi = styled.li`
  color: ${colors.grey_b1b1b1};
  
  svg {
    margin-right: 10px;
  }
`;

const Options = ({ onItemClick }) => {
  return (
    <StyledUl>
      <StyledLi onClick={onItemClick}>
        <FaEdit /> Edit
      </StyledLi>
      <StyledLi onClick={onItemClick}>
        <FaRegCheckCircle /> Publish
      </StyledLi>
      <StyledLi onClick={onItemClick}>
        <FaShareAlt /> Share
      </StyledLi>
      <StyledLi onClick={onItemClick}>
        <FaTrashAlt /> Delete
      </StyledLi>
    </StyledUl>
  );
};

const MoreOptions = ({ onItemClick }) => {
  return (
    <Container>
      <FaEdit />
      <Options onItemClick={onItemClick} />
    </Container>
  );
};

export default MoreOptions;
