import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title, notImplemented }) {
  return (
    <div className={`sidebarRow ${selected && "selected"} ${notImplemented && "notImplemented"}`}>
      {/* If the particular icon is selected, 
      add the 'selected' class using JS */}
      <Icon className={"sidebarRow__icon"} />
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
}

export default SidebarRow;
