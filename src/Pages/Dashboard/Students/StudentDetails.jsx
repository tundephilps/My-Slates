import React from "react";
import Header from "../../../components/Layout/Header";
import StudentProfile from "../../../components/Students/StudentProfile";
import AttendanceCalendar from "../../../components/Students/Attendance";
import SubjectPerformance from "../../../components/Students/SubjectPerformance";
import SubjectAttendance from "../../../components/Students/SubjectAttendance";

const StudentDetails = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#fcfeff] p-6">
        <div className="bg-white p-4 border grid gap-8 grid-cols-2">
          <div>
            <StudentProfile />
            <AttendanceCalendar />
          </div>
          <div>
            <SubjectPerformance />
            <SubjectAttendance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
