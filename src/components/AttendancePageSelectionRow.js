import React from "react";
import AttendancePageDropdown from "./AttendancePageDropdown";
import "./AttendancePageSelectionRow.css";

function AttendancePageSelectionRow({ title, options }) {
  return (
    <div>
      <h4>{title}</h4>
      <AttendancePageDropdown
        options={options}
      />
    </div>
  );
}

export default AttendancePageSelectionRow;
