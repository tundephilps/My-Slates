import React from "react";
import Header from "../../../components/Layout/Header";
import { FaBook, FaUsers, FaLink, FaCopy } from "react-icons/fa";
import Course from "../../../assets/Course.png";
import { IoCopyOutline } from "react-icons/io5";
import ClassDetailsAccordion from "../../../components/Subjects/ClassDetailsAccordion";
import { IoIosArrowBack } from "react-icons/io";

import { useNavigate } from "react-router-dom";

const SubjectDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  const goToStudentsList = () => {
    navigate("/ResultManagement"); // Navigate to the ResultManagement page
  };

  return (
    <div>
      <Header />
      <div className="  p-6 bg-white ">
        <div className="flex flex-row items-center justify-between pb-4">
          <div
            className="border p-1 px-2 text-xs rounded-md inline-flex items-center cursor-pointer hover:bg-gray-100"
            onClick={handleBack}
          >
            <IoIosArrowBack /> Back
          </div>
          <div
            className="border p-1 px-2 text-xs rounded-md cursor-pointer hover:bg-gray-100"
            onClick={goToStudentsList}
          >
            View Students List
          </div>
        </div>
        <h1 className="text-2xl font-bold">Class Details</h1>
        <div className=" mt-2">
          <p className="text-gray-500">Class Link</p>

          <div className="inline-flex justify-between w-full">
            <a href="#" className="font-semibold text-blue-500">
              ACL-A1SBU
            </a>
            <IoCopyOutline className="text-gray-500" />
          </div>
        </div>

        <div className="mt-4  gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>

            <img
              src={Course} // Replace with actual image
              alt="Class Thumbnail"
              className="w-full h-60 rounded-lg object-cover"
            />
            <div className="absolute bottom-4 left-3 text-gray-200 ">
              <p className="text-sm">GRADE 8</p>
              <h2 className="text-xl font-bold">Economics</h2>
            </div>
          </div>

          <div className="w-full">
            <p className="mt-2 text-gray-700 text-base">
              The course introduces a full review of the Economics Subject. This
              is the subject description that shows a class overview so the
              teacher has a view of what shows a class overview so the teacher
              has a view of.
            </p>
            <div className="flex items-center text-gray-600 text-sm mt-3">
              <p className="text-[#035B7c] font-bold">5 LESSONS</p>
              <span className="mx-2">|</span>
              <p className="text-[#035B7c] font-bold">32 STUDENTS</p>
            </div>
          </div>
        </div>

        <ClassDetailsAccordion />
      </div>
    </div>
  );
};

export default SubjectDetails;
