import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  gap:1em;
  min-height: min-content;
`;

const CodeNumer = styled.div`
  font-size: 12em;
`;

const NotFound = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
const Descrition = styled.div`
  font-size: 2em;
`;

export default function NoFound() {
  return (
    <div>
    <Container>
      <CodeNumer>404</CodeNumer>
      <NotFound>Not Found</NotFound>
      <Descrition>
        The resource requested could not be found in the server!
      </Descrition>
    </Container>
    </div>
  );
}
