import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./CalendarCard.css";

function CalendarCard() {
  return (
    <div className="calendarCard">
      <div className="calendarCard__header">
        <div className="calendarCard__headerTitle">
          <h3>Calendar</h3>
        </div>
        <CalendarTodayIcon className="calendarCard__headerLogo" />
      </div>
      <Calendar className="calendarCard__calendar" />
      <div className="calendarCard__expand">
        <h5>Expand</h5>
        <ChevronRightOutlinedIcon />
      </div>
    </div>
  );
}

export default CalendarCard;
