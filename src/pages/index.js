import React, { useEffect } from "react";
import styled from "styled-components";

import { GlobalStateValue } from "../GlobalState";
import Card from "../components/Card/Card";
import EmptyCard from "../components/Card/EmptyCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: flex-start;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    max-width: 270px;
  }

  > div {
    margin: 0 30px 30px 0;

    @media screen and (max-width: 768px) {
      margin: 0 0 30px 0;
    }
  }
`;

const Home = () => {
  const [{ response }, dispatch] = GlobalStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_CARDS",
    });
  }, [dispatch]);

  return (
    <>
      <Container>
        {response && response.map((item, index) => <Card key={`${item.campaignId}_${index}`} data={item} />)}
        <EmptyCard />
      </Container>
    </>
  );
};

export default Home;
