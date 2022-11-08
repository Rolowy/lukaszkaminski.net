import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ButtonStyle = styled.button`
margin: 1em;
background: #ff0;
color ##ddd;

&:active {
  background: #CC3333;
  color: #000;
}
&:hover {
  background: #CC3333;
  color: #fff;
}

`


const Button = ({type, disabled, name, title, onClick}) => (
  <ButtonStyle type={type} disabled={disabled} name={name} onClick={onClick} >
    {title}
  </ButtonStyle>
);

Button.propTypes = {
  disabled:PropTypes.bool,
  type:PropTypes.string,
  name:PropTypes.string,
  title:PropTypes.string,
  onClick:PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  name: 'Press me!',
  title: 'Press me!',
  onClick: (props) => {
    alert('onClick Works!')
  }
};

export default Button;
