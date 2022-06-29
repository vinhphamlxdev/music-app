import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: calc(100% - 240px);
  overflow: hidden overlay;
  margin-left: auto;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 90px;
  padding-bottom: 140px;
  &::-webkit-scrollbar {
    width: 4px;
    display: none;
  }
  &:hover::-webkit-scrollbar {
    width: 4px;
    display: inline-block;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${(props) => props.theme.tabActiveBg};
  }
`;

const WrapperLayout = ({ children }, ref) => {
  return <StyledWrapper ref={ref}>{children}</StyledWrapper>;
};

export default React.forwardRef(WrapperLayout);
