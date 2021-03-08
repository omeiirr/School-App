import React, { useState, useEffect } from "react";
import "./AttendancePageStudentRow.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function AttendancePageStudentRow({ period, student, status }) {
  const buttonOptions = {
    present: {
      variant: "outlined",
      color: "primary",
    },
    absent: {
      variant: "contained",
      color: "secondary",
    },
  };

  return (
    <div>
      <div className="attendancePageStudentRow">
        <h4> Period - {period} </h4>
        <h3> {student} </h3>

        <div className="attenancePageStudentRow__presentButton">
          <Button
            variant={buttonOptions.present.variant}
            color={buttonOptions.present.color}
            onClick={() => {
              //   alert("clicked");
              buttonOptions.present.variant = "contained";
              // variant="outlined"
            }}
          >
            Present
          </Button>
        </div>

        {/* <Button variant="outlined" color="secondary"> */}
        <Button
          variant={buttonOptions.absent.variant}
          color={buttonOptions.absent.color}
        >
          Absent
        </Button>
      </div>
    </div>
  );
}

export default AttendancePageStudentRow;
