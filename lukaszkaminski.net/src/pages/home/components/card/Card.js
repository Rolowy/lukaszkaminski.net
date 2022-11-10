import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #bbdd;
  width: 100%;
  padding: 2em;
  flex: 1 1 33%;
  border-radius: 1em;
`;

const PagesHomeCard = ({title, code}) => (
  <Container>
    <img src="" alt={title} />
    <h1>{title}</h1>
    <p>{code}</p>
  </Container>
);

export default PagesHomeCard;
