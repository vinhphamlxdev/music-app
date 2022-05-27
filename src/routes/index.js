import Profile from "../pages/ProfilePage/Profile";
import Radio from "~/pages/RadioPage/Radio";
import Home from "~/pages/Home/Home";
import ArtistDetails from "~/pages/ArtistDetails/ArtistDetails";
import AlbumDetails from "~/pages/album/AlbumDetails";
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
    path: "/singer/:name",
    component: ArtistDetails,
  },
  {
    path: "/album/:id",
    component: AlbumDetails,
  },
];
// Private Router
export const privateRoutes = [];
