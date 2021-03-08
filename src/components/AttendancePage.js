import React from "react";

import "./AttendancePage.css";
import AttendancePageSelectionRow from "./AttendancePageSelectionRow";
import AttendancePageStudentRow from "./AttendancePageStudentRow";

import Header from "./Header";

function AttendancePage({user}) {
  return (
    <div className="attendancePage">
      <Header user={user} />
      <h1>Attendance</h1>

      <div className="attendancePage__selections">
        <AttendancePageSelectionRow
          title="Class"
          className="attendancePage__dropdown"
          options={[
            { label: "9", value: "9" },
            { label: "10", value: "10" },
            { label: "11", value: "11" },
          ]}
        />

        <AttendancePageSelectionRow
          title="Section"
          className="attendancePage__dropdown"
          options={[
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ]}
        />

        <AttendancePageSelectionRow
          title="Month"
          className="attendancePage__dropdown"
          options={[
            { label: "Jan", value: "Jan" },
            { label: "Feb", value: "Feb" },
            { label: "Mar", value: "Mar" },
          ]}
        />

        <AttendancePageSelectionRow
          title="Session"
          className="attendancePage__dropdown"
          options={[
            { label: "2021", value: "2021" },
            { label: "2020", value: "2020" },
            { label: "2019", value: "2019" },
          ]}
        />
      </div>

      <div className="attendancePage__studentList">
        <AttendancePageStudentRow period="01" student="Aman Bhardwaj" />
        <AttendancePageStudentRow period="02" student="Aman Bhardwaj" />
        <AttendancePageStudentRow period="03" student="Aman Bhardwaj" />
        <AttendancePageStudentRow period="04" student="Aman Bhardwaj" />
        <AttendancePageStudentRow period="05" student="Aman Bhardwaj" />
        <AttendancePageStudentRow period="06" student="Aman Bhardwaj" />
      </div>
    </div>
  );
}

export default AttendancePage;
