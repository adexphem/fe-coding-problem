import React from "react";
import styled from "styled-components";

import Card from "../components/Card/Card";
import EmptyCard from "../components/Card/EmptyCard";
import cards from "../data/cards.json";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: flex-start;
  padding: 30px 0;

  > div {
    margin: 0 30px 30px 0;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <EmptyCard />
        {cards && cards.map((item) => <Card key={item.id} data={item} />)}
      </Container>
    </>
  );
};

export default Home;
