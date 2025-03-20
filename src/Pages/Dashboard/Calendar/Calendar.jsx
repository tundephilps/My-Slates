import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import { CiCirclePlus } from "react-icons/ci";
import MyCalendar from "../../../components/Calendar/MyCalendar";
import Schedule from "../../../components/Calendar/Schedule";
import AddScheduleModal from "../../../components/Calendar/AddScheduleModal";

const Calendar = () => {
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
        </div>
      </div>

      {isModalOpen && (
        <AddScheduleModal onClose={() => setIsModalOpen(false)} />
      )}
      <MyCalendar />
      <Schedule />
    </div>
  );
};

export default Calendar;
