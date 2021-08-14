import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import "../assets/fonts/agency-fb.ttf";

import "../renderer/index.css";
import "../renderer/components/Sidebar.css";

import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import About from "./screens/About";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Store from "./screens/Store";

const App = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);

  const getStatus = () => {
    if (window.innerWidth > 740) {
      if (activeSidebar) return false;
      else return true;
    } else return true;
  };

  return (
    <>
      <Router>
        <Titlebar showAppTitle={!activeSidebar} />

        <Sidebar
          onCollapse={(activeSidebar: boolean) => {
            setActiveSidebar(!activeSidebar);
          }}
        />
        <div className={`content ${activeSidebar ? "active" : ""}`}>
          <Route path={"/"} exact component={Home} />
          <Route path={"/store"} component={Store} />
          <Route path={"/about"} component={About} />
          <Route path={"/settings"} component={Settings} />
        </div>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
