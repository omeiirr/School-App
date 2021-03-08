import React from "react";
import "./EventRow.css";
import Event from "./Event";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

function EventRow() {
  return (
    <div className="eventRow">
      <div className="eventRow__events">
        <Event
          name="Holi"
          type="Holiday"
          description="Festival of colors. Have a safe and happy Holi!"
          date="March 29"
        />

        <Event
          name="Convocation"
          type="Event"
          description="Celebrating the talents of star performers of academic year 2020."
          date="March 31"
        />

        <Event
          name="Diwali"
          type="Holiday"
          description="Festival of lights and victory of good over evil. Happy Diwali!"
          date="November 4"
        />
      </div>
      <div className="eventRow__arrow">
        <ArrowForwardIosOutlinedIcon />
      </div>
    </div>
  );
}

export default EventRow;
