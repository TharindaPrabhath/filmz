import * as AiIcon from "react-icons/ai";
import { IconType } from "react-icons/lib";

const TAB_CLASS_NAME = "sidebar-tab"
const ICON_COLOR = "white";
const ICON_SIZE = 24;

interface SidebarTabProps {
  cName:string;
  title:string;
  path:string;
  icon:{
    name:IconType;
    color:string;
    size:number;
  };
}

export const Home:SidebarTabProps = {
  cName: TAB_CLASS_NAME,
  title: "Home",
  path: "/",
  icon:{
    name:AiIcon.AiFillHome,
    color: ICON_COLOR,
    size: ICON_SIZE
  }
}

export const Store:SidebarTabProps = {
  cName: TAB_CLASS_NAME,
  title: "Store",
  path: "/store",
  icon:{
    name:AiIcon.AiFillShop,
    color: ICON_COLOR,
    size: ICON_SIZE
  }
}

export const Settings:SidebarTabProps = {
  cName: TAB_CLASS_NAME,
  title: "Settings",
  path: "/settings",
  icon:{
    name:AiIcon.AiFillSetting,
    color: ICON_COLOR,
    size: ICON_SIZE
  }
}

export const About:SidebarTabProps = {
  cName: TAB_CLASS_NAME,
  title: "About",
  path: "/about",
  icon:{
    name:AiIcon.AiFillInfoCircle,
    color: ICON_COLOR,
    size: ICON_SIZE
  }
}
