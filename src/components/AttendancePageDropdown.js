import React from "react";
import "./AttendancePageDropdown.css";

import Select from "react-select";

function AttendancePageDropdown({ options }) {
  // const options = [
  //     { label: '9A', value: '9A' },
  //     { label: '9B', value: '9B' },
  //     { label: '10A', value: '10A' },
  //     { label: '10B', value: '10B' }
  // ]


  return (
    <div className="dropdown">
      <Select options={options} />
    </div>
  );
}

export default AttendancePageDropdown;
