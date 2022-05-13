import Profile from "../pages/ProfilePage/Profile";
import Explore from "~/pages/ExplorePage/Explore";
import Radio from "~/pages/RadioPage/Radio";
//  public Router
export const publicRoutes = [
  {
    path: "/",
    component: Profile,
  },
  {
    path: "/explore",
    component: Explore,
  },
  {
    path: "/radio",
    component: Radio,
  },
];
// Private Router
export const privateRoutes = [];
