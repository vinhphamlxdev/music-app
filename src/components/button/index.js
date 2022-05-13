import React from "react";
import styled from "styled-components";
const StyledButton = styled.div`
  background-color: ${(props) => props.theme.purplePrimary};
  color: ${(props) => props.theme.textColor};
  padding: 6px 35px;
  cursor: pointer;
`;
const Button = ({ className, onClick, children }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`flex items-center rounded-xl  uppercase text-xs ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
