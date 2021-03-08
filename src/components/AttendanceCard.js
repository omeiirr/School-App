import React from "react";
import "./AttendanceCard.css";

import DateRangeIcon from "@material-ui/icons/DateRange";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import { Doughnut } from "react-chartjs-2";

import { Link } from "react-router-dom";

function AttendanceCard({ presentStudents, absentStudents }) {
  const options = { legend: { display: false } };
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "# of Votes",
        data: [presentStudents, absentStudents],
        backgroundColor: [
          "green",
          "red",
          //   "rgba(255, 206, 86, 0.2)",
          //   "rgba(75, 192, 192, 0.2)",
          //   "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 3,
      },
    ],
  };

  return (
    <div className="attendanceCard">
      <div className="attendanceCard__header">
        <div className="attendanceCard__headerTitle">
          <h3>Attendance</h3>
          <h4>Today's Overall Attendance</h4>
        </div>
        <DateRangeIcon className="attendanceCard__headerLogo" />
      </div>

      <div className="attendanceCard__chart">
        <Doughnut
          data={data}
          height={100}
          options={options}
          className="attendanceCard__chart"
        />
      </div>
      <div className="attendanceCard__details">
        <div className="attendanceCard__details--present">
          <h5>Present</h5>
          <h4>
            {presentStudents} (
            {(
              (presentStudents * 100) /
              (presentStudents + absentStudents)
            ).toFixed(2)}
            %)
          </h4>
        </div>
        <div className="attendanceCard__details--absent">
          <h5>Absent</h5>
          <h4>
            {absentStudents} (
            {(
              (absentStudents * 100) /
              (presentStudents + absentStudents)
            ).toFixed(2)}
            %)
          </h4>
        </div>
      </div>

      <Link to="/attendance" >
        {/* style={{textDecoration: 'none', color:'green'}} */}
        <div className="attendanceCard__expand" >
          <h5>Expand</h5>
          <ChevronRightOutlinedIcon />
        </div>
      </Link>
    </div>
  );
}

export default AttendanceCard;
