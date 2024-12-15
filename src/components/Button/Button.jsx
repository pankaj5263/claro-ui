import React from 'react';
import styled from 'styled-components';
import {getButtonStyles, getButtonSize} from "./utils";

const StyledButton = styled.button`
  ${({ variant, size, disabled }) => {
    const { background, color, border } = getButtonStyles(variant);
    const padding = getButtonSize(size);

    return `
      background: ${background};
      color: ${color};
      border: ${border};
      font-size: ${size === 'large' ? '1.25em' : size === 'small' ? '0.85em' : '1em'};
      margin: 1em;
      padding: ${padding};
      border-radius: 4px;
      cursor: ${disabled ? 'not-allowed' : 'pointer'};
      opacity: ${disabled ? 0.6 : 1};
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: ${disabled ? 0.6 : 0.8};
      }
    `;
  }}
`;

const Button = ({
  onClick,
  label,
  variant = 'default',
  size = 'medium',
  disabled = false,
  backgroundColor,
  ...rest
}) => {

  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      style={backgroundColor ? { backgroundColor } : undefined}
      disabled={disabled}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
