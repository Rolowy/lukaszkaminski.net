import React from 'react';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';

const email = 'kontakt@lukaszkaminski.net';
const pulse_animation = keyframes`${pulse}`;

const Container = styled.div`
display: flex;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.h1`
@import url("https://fonts.googleapis.com/css?family=Russo+One&:400,700&display=swap");
font-family: 'Russo One', sans-serif;
margin: 0.5rem;
font-size: 7rem;
    text-align: uppercase;
    color: #ff0000;
    background: -webkit-linear-gradient(#3c42ed,#2cb1ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff00;
    

&:first-letter {
  color: #ddd;
}

`

const Title = styled.h1`

font-size: 1,5em; 
animation: 1s ${pulse_animation}
`

const Description = styled.a`
font-size: 1em; 
`

function CropAnimation() {
  
}

function InformationUc() {
  let title = document.getElementById('uc-title');

  const getTitle = (() => {return title;});

  return (
    <Container>
      <Icon>|ŁK</Icon>
      <Title id='uc-title'>Website under construction.</Title>
      <Description target="blank" href={`mailto:${email}`}>{email}</Description>
    </Container>
  )
}


export default InformationUc;
