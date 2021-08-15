import React from "react";

import "../components/Actionbar.css";

import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Actionbar = () => {
  return (
    <div className="actionbar">
      <div className="actionbar__content">
        <div className="left-col">
          <button className="back-btn">
            <IoIcons.IoIosArrowBack size={24} color={"white"} />
          </button>

          <div className="search">
            <input type="text" className="searchbar" />
            <span>
              <IoIcons.IoIosSearch
                className="search-icon"
                size={24}
                color={"white"}
              />
            </span>
          </div>
        </div>

        <div className="right-col">
          <FaIcons.FaUserCircle className="user" size={24} color={"white"} />
          <Link to={""} className="settings">
            <IoIcons.IoIosSettings size={24} color={"white"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Actionbar;
