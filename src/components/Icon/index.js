import React from "react";
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
const Icon = ({ children }) => {
  return <StyledIcon>{children}</StyledIcon>;
};

export default Icon;
