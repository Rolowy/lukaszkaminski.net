import React from "react";
import styled from "styled-components";
import Data from "./data/Data";
import CardLazy from './components/card/Card.lazy'

const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6em;
`;

export default function Home() {
  return (
    <>
      <div>Home</div>

      <ContainerBox>
        {Data.map((data) => {
          return (
            <CardLazy title={data.title} code={data.code}/>
          );
        })}
      </ContainerBox>
    </>
  );
}
