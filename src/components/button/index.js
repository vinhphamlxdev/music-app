import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.purplePrimary};
  border: 1px solid ${(props) => props.theme.purplePrimary};
  color: ${(props) => props.theme.textColor};
  padding: 5px 35px;
  cursor: pointer;
  font-size: 8px;
`;
const Button = ({ className, onClick = () => {}, children }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`flex items-center whitespace-nowrap rounded-full justify-center  rounded-  uppercase  ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
