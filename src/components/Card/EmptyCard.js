import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

import colors from "../../config/colors";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 60px;
  font-size: 13px;
  border-radius: 5px;
  width: 270px;
  height: 327px;
  border: 1px dotted ${colors.grey_ededed};

  &:hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 10%) 10px 10px 20px -10px;
  }
`;

const StyledPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.grey_dcdcdc};
  color: ${colors.white};
  font-size: 14px;
`;

const StyledText = styled.div`
  color: ${colors.grey_c5c5c5};
  font-size: 16px;
`;

const props = {
  image: "https://loremflickr.com/750/400",
  title: "Create a site no Programming skills required in 2 weeks",
  currencySymbol: "$",
  amount: "4500",
  status: "active",
};

const Card = () => {
  const onCardCreate = () => {
    console.log("Resubmitting...");
  };

  return (
    <Container onClick={onCardCreate}>
      <StyledPlus>
        <FaPlus />
      </StyledPlus>
      <StyledText>Create a Service Card</StyledText>
    </Container>
  );
};

export default Card;
