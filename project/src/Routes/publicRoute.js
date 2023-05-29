import Explore from "../Pages/Explore/Explore";
import Home from "../Pages/Home/Home";
import Library from "../Pages/Library/Library"
import Song from "../Pages/Song/Song";

export const publicRoute = {
  "/": Home,
  "/library": Library,
  "/explore": Explore,
  "/song": Song
};
