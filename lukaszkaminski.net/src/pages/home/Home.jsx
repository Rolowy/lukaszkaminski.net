import React, { useState } from "react";
import styled from "styled-components";
import Data from "./data/Data";

const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  min-width: max-content;
  margin: 3em;
`;

const Container = styled.div`
background-color: #bbdd;
width: 100%;
padding: 1em;
flex: 1 1 33%;
border-radius: 0.3em;
background-color: rgba(255, 255, 255, 1);
box-shadow: inset -4px 1px 9px 4px #0000001c;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
`;

const Code = styled.textarea`
min-height: 100px;
background: #fff;
border: 1px solid #766c6c;
padding: 0.5em;
`;


const Box = ({ title, code }) => {
  return (
    <Container>
      <Content>
        <img src="" alt={title} />
        <h1>{title}</h1>
        <Code disabled={true}>{code}</Code>
      </Content>
    </Container>
  );
};

Box.defaultProps = {
  code: ''
}

const InputSearch = styled.input`
  display: flex;
  padding: 0.4em;
  margin: 2em auto;
  border: 2px solid #bdb5b56b;
`;

export default function Home() {
  const inputhandle = (event) => {
    setTimeout(() => {
      setSearch(event.target.value);
    }, 3000);
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <InputSearch type="text" onChange={inputhandle} />

      <ContainerBox>
        {Data.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
          return val;
        }).map((val, key) => {
          return <Box title={val.title} code={val.code} />;
        })}
      </ContainerBox>
    </>
  );
}
