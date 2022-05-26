import Profile from "../pages/ProfilePage/Profile";
import Radio from "~/pages/RadioPage/Radio";
import Home from "~/pages/Home/Home";
import ArtistDetails from "~/pages/ArtistDetails/ArtistDetails";
//  public Router
export const publicRoutes = [
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/radio",
    component: Radio,
  },
  {
    path: "/Singer/:name",
    component: ArtistDetails,
  },
];
// Private Router
export const privateRoutes = [];
