import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import AddScheduleModal from "../../../components/Schedule/AddScheduleModal";
import { CiCirclePlus } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Header />
      <div className="p-6 flex items-center justify-between">
        <p className="text-2xl font-bold">November 2024</p>
        <div className="inline-flex gap-6">
          <div
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
          >
            <CiCirclePlus className="text-xl " />
            Add Schedule
          </div>

          {/* Attendance Modal (Conditional Rendering) */}
          {isModalOpen && (
            <AddScheduleModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
