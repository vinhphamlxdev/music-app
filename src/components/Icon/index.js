import React, { forwardRef } from "react";
import styled from "styled-components";
const StyledIcon = styled.div`
  border-radius: 100rem;
  cursor: pointer;
  margin: 0 2px;
  padding: 8px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.alphaBg};
  }
`;
const Icon = ({ children, ...props }, ref) => {
  return <StyledIcon ref={ref}>{children}</StyledIcon>;
};

export default forwardRef(Icon);
