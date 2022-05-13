import Header from "./Header";
import PlayerControl from "./PlayerControl";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex wrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      <PlayerControl></PlayerControl>
      <div className="content">{children}</div>
    </div>
  );
};
export default DefaultLayout;
