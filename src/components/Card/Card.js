import React from "react";
import styled from "styled-components";

import PriceSlashDuration from "../PriceSlashDuration";
import CardFooter from "./CardFooter";
import Status from "../Status";
import colors from "../../config/colors";
import { TwoLineClamp } from "../Clamp";
import { statuses } from "../../config/constants";

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
  min-height: 48px;
  margin-bottom: 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bar = styled.div`
  height: 7px;
  width: 100%;
  margin-top: 11px;
  background-color: ${({ status }) => (status === "live" ? statuses.saved : colors.grey_e0e0e0)};
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

const Card = ({ data }) => {
  const { primaryMediaUrl, cardTitle, cardDescription, currentWorkflow, listOfPlans, likes, views, shares } = data;
  const plansCount = listOfPlans.length;
  const { currencySymbol, amount } = listOfPlans[plansCount - 1].price;

  const onResubmit = () => {
    console.log("Resubmitting...");
  };

  return (
    <Container>
      <StyledImage>
        <img src={primaryMediaUrl} alt={cardTitle} />
      </StyledImage>

      <StyledDescription>
        <StyledTitle>{cardDescription}</StyledTitle>

        <PriceWrapper>
          <PriceSlashDuration currencySymbol={currencySymbol} amount={amount} />
          <Status status={currentWorkflow} />
        </PriceWrapper>

        <Bar status={currentWorkflow} />
      </StyledDescription>

      <Footer>
        <CardFooter onResubmit={onResubmit} likes={likes} views={views} shares={shares} />
      </Footer>
    </Container>
  );
};

export default Card;
