import React, { Fragment } from "react";
import styled from "styled-components";
const StyledMain = styled.div`
  background-image: url(${(props) => props.theme.bgImage});
  background-repeat: no-repeat;
  background-size: 1920px auto;
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Main = () => {
  return (
    <Fragment>
      <StyledMain></StyledMain>
      {/* <Outlet></Outlet> */}
    </Fragment>
  );
};

export default Main;
