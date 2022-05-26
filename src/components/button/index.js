import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.purplePrimary};
  /* border: 1px solid ${(props) => props.theme.purplePrimary}; */
  color: #fff;
  padding: 4px 26px;
  cursor: pointer;
  font-size: 8px;
  text-transform: uppercase;
  ${(props) =>
    props.preview &&
    css`
      background-color: transparent;
      border: 1px solid #fff;
    `};
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.theme.purplePrimary};
    `};
`;
const Button = ({
  className,
  preview = false,
  onClick = () => {},
  leftIcon = false,
  rightIcon = false,
  children,
  small = false,
  large = false,
  border = false,
}) => {
  return (
    <StyledButton
      preview={preview}
      onClick={onClick}
      className={`flex items-center whitespace-nowrap rounded-full justify-center  rounded-  uppercase  ${className}`}
    >
      {leftIcon && <>{leftIcon}</>}
      <span> {children}</span>
      {rightIcon && <>{rightIcon}</>}
    </StyledButton>
  );
};

export default Button;
