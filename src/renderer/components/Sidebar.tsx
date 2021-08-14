import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../components/Sidebar.css";

import { AiOutlineMenu as Menu } from "react-icons/ai";

import { Home, Store, Settings, About } from "../../shared/data/sidebarData";

import makeWindows10LikeHover from "../../shared/utils/windows10LikeHover";
import { resetStyles } from "../../shared/utils/windows10LikeHover";
import createActiveTab from "../../shared/utils/activeTab";

interface SidebarProps {
  onCollapse: any;
}

const Sidebar = (props: React.PropsWithChildren<SidebarProps>) => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const homeTab = useRef(null);
  const storeTab = useRef(null);
  const settingsTab = useRef(null);
  const aboutTab = useRef(null);

  useEffect(() => {
    props.onCollapse(!activeSidebar);
  }, [activeSidebar]);

  const getTabs = () => {
    return new Array<HTMLElement>(
      homeTab.current!,
      storeTab.current!,
      settingsTab.current!,
      aboutTab.current!
    );
  };

  return (
    <div className={`sidebar ${activeSidebar ? "active" : ""}`}>
      <h4 className="app-title">Deals App</h4>
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
              <li
                className={Home.cName}
                ref={homeTab}
                onMouseMove={(e) => {
                  makeWindows10LikeHover(e, homeTab.current!);
                }}
                onMouseLeave={() => {
                  resetStyles(homeTab.current!);
                }}
                onClick={() => {
                  createActiveTab(homeTab.current!, getTabs());
                }}
              >
                <Link to={Home.path}>
                  <Home.icon.name
                    color={Home.icon.color}
                    size={Home.icon.size}
                  />
                  <span>{Home.title}</span>
                </Link>
              </li>
              <li
                className={Store.cName}
                ref={storeTab}
                onMouseMove={(e) => {
                  makeWindows10LikeHover(e, storeTab.current!);
                }}
                onMouseLeave={() => {
                  resetStyles(storeTab.current!);
                }}
                onClick={() => {
                  createActiveTab(storeTab.current!, getTabs());
                }}
              >
                <Link to={Store.path}>
                  <Store.icon.name
                    color={Store.icon.color}
                    size={Store.icon.size}
                  />
                  <span>{Store.title}</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="tabs__bottom">
            <ul>
              <li
                className={Settings.cName}
                ref={settingsTab}
                onMouseMove={(e) => {
                  makeWindows10LikeHover(e, settingsTab.current!);
                }}
                onMouseLeave={() => {
                  resetStyles(settingsTab.current!);
                }}
                onClick={() => {
                  createActiveTab(settingsTab.current!, getTabs());
                }}
              >
                <Link to={Settings.path}>
                  <Settings.icon.name
                    color={Settings.icon.color}
                    size={Settings.icon.size}
                  />
                  <span>{Settings.title}</span>
                </Link>
              </li>
              <li
                className={About.cName}
                ref={aboutTab}
                onMouseMove={(e) => {
                  makeWindows10LikeHover(e, aboutTab.current!);
                }}
                onMouseLeave={() => {
                  resetStyles(aboutTab.current!);
                }}
                onClick={() => {
                  createActiveTab(aboutTab.current!, getTabs());
                }}
              >
                <Link to={About.path}>
                  <About.icon.name
                    color={About.icon.color}
                    size={About.icon.size}
                  />
                  <span>{About.title}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
