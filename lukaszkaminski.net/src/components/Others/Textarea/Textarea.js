import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleTextarea = styled.textarea`
border-radius: 5px;
border: 0;
padding: 1em;
`

const Textarea = ({value, name, placeholder, disabled}) => (
  <StyleTextarea name={name} placeholder={placeholder} disabled={disabled}>
    {value}
  </StyleTextarea>
);

Textarea.propTypes = {
  value:PropTypes.string,
  placeholder:PropTypes.string,
  disabled:PropTypes.bool
};

Textarea.defaultProps = {
  value:'',
  placeholder: '',
  disabled: false
};

export default Textarea;
