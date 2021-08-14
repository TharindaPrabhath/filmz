import * as FaIcon from "react-icons/fa"
import SidebarTabProps from "../types/sidebarTabProps";

const TAB_CLASS_NAME = "tab"
const ICON_COLOR = "white";
const ICON_SIZE = 24;

export const Home:SidebarTabProps = {
  id: "explore",
  cName: TAB_CLASS_NAME,
  title: "Explore",
  path: "/",
  icon:{
    name:FaIcon.FaRegCompass,
    color: ICON_COLOR,
    size: ICON_SIZE
  }
}

export const tabs:SidebarTabProps[] = [
  Home
]