import React, { forwardRef } from "react";
import styled from "styled-components";
import { css } from "styled-components";
const StyledIcon = styled.div`
  border-radius: 100rem;
  cursor: pointer;
  margin: 0 2px;
  padding: 8px;
  color: ${(props) => props.theme.textPrimary};
  &:hover {
    background-color: ${(props) => props.theme.alphaBg};
  }
  ${(props) =>
    props.control &&
    css`
      padding: 3px;
      margin: 0 7px;
      line-height: 0;
      font-size: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 18px;
      color: ${(props) => props.theme.textPrimary};
    `};
`;
const Icon = ({ children, onclick, control }, ref) => {
  return (
    <StyledIcon control={control} onClick={onclick} ref={ref}>
      {children}
    </StyledIcon>
  );
};

export default forwardRef(Icon);
