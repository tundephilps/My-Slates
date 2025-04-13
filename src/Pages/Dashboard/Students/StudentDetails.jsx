import React from "react";
import Header from "../../../components/Layout/Header";
import StudentProfile from "../../../components/Students/StudentProfile";
import AttendanceCalendar from "../../../components/Students/Attendance";
import SubjectPerformance from "../../../components/Students/SubjectPerformance";
import SubjectAttendance from "../../../components/Students/SubjectAttendance";

import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  const goToStudentsResult = () => {
    navigate("/StudentResult"); // Navigate to the ResultManagement page
  };

  return (
    <div>
      <Header />
      <div className="bg-[#fcfeff] p-6">
        <div className="flex flex-row items-center justify-between pb-4">
          <div
            className="border p-1 px-2 text-xs rounded-md inline-flex items-center cursor-pointer hover:bg-gray-100"
            onClick={handleBack}
          >
            <IoIosArrowBack /> Back
          </div>
          <div
            className="text-white p-2 px-4 text-xs rounded-md cursor-pointer bg-[#0598ce]"
            onClick={goToStudentsResult}
          >
            View Results
          </div>
        </div>
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
