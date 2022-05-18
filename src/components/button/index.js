import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.purplePrimary};
  border: 1px solid ${(props) => props.theme.purplePrimary};
  color: #fff;
  padding: 4px 26px;
  cursor: pointer;
  font-size: 8px;
  ${(props) =>
    props.preview &&
    css`
      background-color: transparent;
      border: 1px solid #fff;
    `};
`;
const Button = ({ className, preview, onClick = () => {}, children }) => {
  return (
    <StyledButton
      preview={preview}
      onClick={onClick}
      className={`flex items-center whitespace-nowrap rounded-full justify-center  rounded-  uppercase  ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
