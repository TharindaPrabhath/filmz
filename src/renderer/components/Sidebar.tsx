import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../components/Sidebar.css";

import { AiOutlineMenu as Menu } from "react-icons/ai";

import { tabs } from "../../shared/data/sidebarData";
import { APP_NAME } from "../../shared/data/appMetaData";

interface SidebarProps {
  onCollapse: any;
}

const Sidebar = (props: React.PropsWithChildren<SidebarProps>) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(() => {
    props.onCollapse(!activeSidebar);
  }, [activeSidebar]);

  return (
    <div className={`sidebar ${activeSidebar ? "active" : ""}`}>
      <h4 className="app-title">{APP_NAME}</h4>
      <div className="sidebar__content">
        <div className="menu">
          <button
            onClick={() => {
              if (activeSidebar) {
                setActiveSidebar(false);
              } else {
                setActiveSidebar(true);
              }
            }}
          >
            <Menu color={"white"} size={24} />
          </button>
        </div>

        <div className="tabs">
          <div className="tabs__top">
            <ul>
              {tabs.map((tab, index) => {
                return (
                  <li key={index} id={tab.id} className={tab.cName}>
                    <Link to={tab.path}>
                      <tab.icon.name
                        color={tab.icon.color}
                        size={tab.icon.size}
                      />
                      <span>{tab.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
