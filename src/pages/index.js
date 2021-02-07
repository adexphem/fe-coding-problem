import React from "react";

import PriceSlashDuration from "../components/PriceSlashDuration";
import Status from "../components/Status";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <PriceSlashDuration currencySymbol="$" amount="3500" />
      <Status status="active" />
      <Card />
    </div>
  );
};

export default Home;
