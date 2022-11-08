import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';


const ButtonStyle = styled.button`
padding: 1em 1.5em;
margin: 1em;
background: white;
border: 0;
border-radius: 5px;
color: #000;
transition: background 0.4s;
transition-timing-function: ease;
cursor: pointer;
text-align: center;
text-transform: uppercase;


&:active {
  color: #000;
}
&:hover {
  background: #CC3333;
  color: #fff;
}
&:before {
  content: "${(props)=>props.icon}";
  }
`

const FontsButtonStyle = styled(ButtonStyle)`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

font-weight: 800;
font-family: 'Bebas Neue', cursive;

`

const Button = ({type, disabled, name, title, onClick, className, icon}) => (
  <FontsButtonStyle icon={icon} type={type} disabled={disabled} name={icon} onClick={onClick} className={className}>
    {title}
  </FontsButtonStyle>
);

Button.propTypes = {
  disabled:PropTypes.bool,
  type:PropTypes.string,
  name:PropTypes.string,
  title:PropTypes.string,
  onClick:PropTypes.func,
  className:PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  name: 'Press me!',
  title: 'Press me!',
  onClick: (props) => {
    alert('onClick Works!')
  },
  className:'',
  icon: '😀'
};

export default Button;
