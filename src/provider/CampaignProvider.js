import React, { useState } from "react";

import CampaignContext from "../context/CampaignContext";
import cards from "../data/cards.json";

const CampaignProvider = (props) => {
  const [campaigns, setCampaigns] = useState(cards);

  return (
    <CampaignContext.Provider
      value={{
        cards: campaigns,
        filterByCurrentWorkflow: (selectedCurrentWorkflow) => {
          const _campaigns = Object.assign({}, campaigns);
          const response = _campaigns.filter((item) => item.selectedCurrentWorkflow === selectedCurrentWorkflow);
          setCampaigns({
            response,
          });
        },
      }}>
      {props.children}
    </CampaignContext.Provider>
  );
};

export default CampaignProvider;
