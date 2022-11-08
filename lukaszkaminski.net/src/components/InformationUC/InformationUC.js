import React from 'react';
import styled, {keyframes} from 'styled-components';
import { pulse } from 'react-animations';

import Button from './../assets/Button/Button';

//? --Variables--
const email = 'kontakt@lukaszkaminski.net';
const pulse_animation = keyframes`${pulse}`;


//? --Styles--
const Container = styled.div`
margin: 2em;
display: flex;
  align-items: center;
  flex-direction: column;
`

const Icon = styled.div`
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
animation: 1s ${pulse_animation};
text-align: center;
`

const Description = styled.a`
font-size: 1em; 
text-align: center;
`
//? --Styles--



//? --Functions --
function InformationUc() {
  return (
    <Container>
      <Icon>|ŁK</Icon>
      <Title>Website under construction.</Title>
      <Description target="blank" href={`mailto:${email}`}>{email}</Description>

      <Button/>
    </Container>
  )
}
//? --Functions --

export default InformationUc;
