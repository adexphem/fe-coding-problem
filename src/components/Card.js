import React from "react";
import styled from "styled-components";

import PriceSlashDuration from "./PriceSlashDuration";
import CardFooter from "./CardFooter";
import Status from "./Status";
import colors from "../config/colors";
import { TwoLineClamp } from "./Clamp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  border-radius: 5px;
  width: 270px;
  height: 327px;
  border: 1px solid ${colors.grey_ededed};
  box-shadow: rgb(0 0 0 / 10%) 10px 10px 20px -10px;
`;

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 170px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${colors.medium};

  img {
    object-fit: cover;
    object-position: left center;
  }
`;

const StyledDescription = styled.div`
  padding: 12px;
  background-color: ${colors.white};
`;

const StyledTitle = styled(TwoLineClamp)`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bar = styled.div`
  height: 7px;
  width: 100%;
  margin-top: 10px;
  background-color: ${colors.grey_e0e0e0};
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: "center";
  height: 37px;
  padding: 12px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${colors.light_grey};
`;

const props = {
  image: "https://loremflickr.com/750/400",
  title: "Create a site no Programming skills required in 2 weeks",
  currencySymbol: "$",
  amount: "4500",
  status: "active",
};

const Card = () => {
  const { image, title, currencySymbol, amount, status } = props;

  return (
    <Container>
      <StyledImage>
        <img src={image} />
      </StyledImage>

      <StyledDescription>
        <StyledTitle>{title}</StyledTitle>

        <PriceWrapper>
          <PriceSlashDuration currencySymbol={currencySymbol} amount={amount} />
          <Status status={status} />
        </PriceWrapper>

        <Bar />
      </StyledDescription>

      <Footer>
        <CardFooter />
      </Footer>
    </Container>
  );
};

export default Card;
