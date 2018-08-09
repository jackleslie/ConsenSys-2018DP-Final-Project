import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '../styles';

const StyledInput = styled.input`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'noce' : 'auto')};
  width: auto;
  max-width: 100%;
  margin-top: 8px;
  margin-bottom: 20px;
  border: none;
  border-bottom: solid 2px;
  border-bottom-color: ${({value}) => (value == null || value.length == 0 ? colors.lightGrey : colors.darkGrey)}
  font-size: ${fonts.size.medium};
  color: ${colors.darkGrey};
  &::placeholder {
    color: ${colors.lightGrey};
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
`;

class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <StyledInput
        disabled={this.props.disabled}
        placeholder={this.props.placeholder}
        type={this.props.type}
        {...this.props}
      />
    );

  }

}

Input.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  disabled: false,
  placeholder: '',
  type: 'Text',
};

export default Input;
