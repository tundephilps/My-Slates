import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import { CiCirclePlus } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CourseCard } from "../../../components/Subjects/CourseCard";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="p-6 flex items-center justify-between">
        <p className="text-2xl font-bold">My Subjects</p>
        <div className="inline-flex gap-6">
          <div
            onClick={() => navigate("/AddSubject")}
            className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
          >
            <CiCirclePlus className="text-xl " />
            Add Subject
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="flex items-center justify-end gap-6 p-4 border-b">
          <div className="relative w-96">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="inline-flex items-center px-3 py-1.5 text-sm text-gray-800 border rounded-lg hover:bg-gray-50">
            <IoFilter className="w-4 h-4 mr-2" />
            Apply filter
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4">
          <CourseCard />
          <CourseCard /> <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Subjects;
