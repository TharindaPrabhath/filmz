import { IconType } from "react-icons/lib";

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

  export default SidebarTabProps;