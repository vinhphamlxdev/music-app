import styled from "styled-components";
import Header from "./Header";
import PlayerControl from "./PlayerControl";
import Sidebar from "./Sidebar";

const StyledWrapper = styled.div`
  background-image: url(${(props) => props.theme.bgImage});
  background-color: ${(props) => props.theme.layoutBg};

  background-repeat: no-repeat;
  background-size: 1920px auto;
  width: 100%;
  height: 100vh;
  display: flex;
`;
const DefaultLayout = ({ children }) => {
  return (
    <StyledWrapper>
      <Header></Header>
      <Sidebar></Sidebar>
      <PlayerControl></PlayerControl>
      <div className="content ">{children}</div>
    </StyledWrapper>
  );
};
export default DefaultLayout;
