import React from "react";
import "./Event.css";

function Event({ name, type, description, date }) {
  return (
    <div className="event">
      <div className="event__title">
        <h3>{name}</h3>
        <h3 className="event__type">{type}</h3>
      </div>
      <div className="event__description">
        <h4>{description}</h4>
      </div>

      <div className="event__date">{date}</div>
    </div>
  );
}

export default Event;
