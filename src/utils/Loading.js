import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  .loading {
    border: 2px solid ${(props) => props.theme.textPrimary};
    border-top: transparent;
  }
`;
const Loading = ({ className }, ref) => {
  return (
    <StyledLoading ref={ref} className="flex justify-center w-full">
      <div className="w-10 h-10 bg-transparent rounded-full loading animate-spin spiner border-t-transparent"></div>
    </StyledLoading>
  );
};

export default React.forwardRef(Loading);
