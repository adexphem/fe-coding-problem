import React from "react";
import styled from "styled-components";

import colors from "../config/colors";

const StyledText = styled.div`
  color: ${colors.grey_b1b1b1};
  text-transform: capitalize;
  font-size: 14px;
`;

const PriceSlashDuration = ({ currencySymbol = "$", amount = "0.00" }) => {
  return <StyledText>{`${currencySymbol} ${amount} / Month`}</StyledText>;
};

export default PriceSlashDuration;
