import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import "../assets/fonts/agency-fb.ttf";

import "../renderer/index.css";
import "../renderer/components/Sidebar.css";

import Titlebar from "./components/Titlebar";
import Sidebar from "./components/Sidebar";
import Home from "./screens/Explore";
import Actionbar from "./components/ActionBar";

const App = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);

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
          <Actionbar />
          <Route path={"/"} exact component={Home} />
        </div>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
