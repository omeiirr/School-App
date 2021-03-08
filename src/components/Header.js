import React, { useState } from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";

import { Link } from "react-router-dom";
import HomepageTitle from "./HomepageTitle";

function Header({ user }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <HomepageTitle user={user} />

      <div className="header__search">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search..."
          type="text"
        />

        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

        <NotificationsNoneOutlinedIcon className="header__notification" />
     
    </div>
  );
}

export default Header;
