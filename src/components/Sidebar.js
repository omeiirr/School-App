import React from "react";
import "./Sidebar.css";

import SidebarRow from "./SidebarRow";

import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import PersonIcon from "@material-ui/icons/Person";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import { Avatar } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

import { Link } from "react-router-dom";
function Sidebar({ user, userType }) {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar__logo">
          <img
            className="sidebar__logo"
            src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png"
            alt=""
          />
        </div>
      </Link>
      <Link to="/">
        <SidebarRow selected Icon={HomeIcon} title="Home" />
      </Link>
      <SidebarRow Icon={AnnouncementIcon} title="Notice Board" notImplemented />

      <Link to="/attendance">
        <SidebarRow  Icon={DateRangeIcon} title="Attendance" />
      </Link>
      <SidebarRow
        Icon={AccountBalanceWalletIcon}
        title="Fees Details"
        notImplemented
      />
      <SidebarRow Icon={CalendarTodayIcon} title="Calendar" notImplemented />
      <SidebarRow Icon={PhotoLibraryIcon} title="Multimedia" notImplemented />
      <SidebarRow Icon={ScheduleIcon} title="Time Table" notImplemented />
      <SidebarRow
        Icon={CollectionsBookmarkIcon}
        title="Schedules"
        notImplemented
      />
      <SidebarRow
        Icon={PeopleAltIcon}
        title="Support Requests"
        notImplemented
      />
      <SidebarRow Icon={FlagIcon} title="Support" notImplemented />
      <SidebarRow Icon={PersonIcon} title="Account" notImplemented />

      <div className="sidebar__account">
        <Avatar
          src="https://static.vecteezy.com/system/resources/previews/000/424/070/original/female-avatar-icon-vector-illustration.jpg"
          alt={user}
        ></Avatar>
        <div className="sidebar__accountName">
          <h4>{user}</h4>
          <h5>{userType}</h5>
        </div>
        <UnfoldMoreIcon />
      </div>
    </div>
  );
}

export default Sidebar;
