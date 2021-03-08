import React from "react";
import "./Homepage.css";
import EventRow from "./EventRow";

import Header from "./Header";
import AttendanceCard from "./AttendanceCard";
import CalendarCard from "./CalendarCard";

function Homepage({user}) {
  return (
    <div className="homepage">
      <Header user={user} />
      <EventRow />

      <div className="attendanceCalendar">
        <AttendanceCard presentStudents={18} absentStudents={3} />
        <CalendarCard />
      </div>
    </div>
  );
}

export default Homepage;
