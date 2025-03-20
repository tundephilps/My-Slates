import React, { useState } from "react";
import Header from "../../../components/Layout/Header";
import { GoDownload } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import { MdFace, MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaUserEdit } from "react-icons/fa";
import TakeAttendanceModal from "../../../components/Attendance/TakeAttendanceModal";
import AttendanceTable from "../../../components/Attendance/AttendanceTable";
import TakeManuallyModal from "../../../components/Attendance/TakeManuallyModal";
import Pagination from "../../../components/Attendance/Pagination";

const Attendance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <div className="p-6 flex items-center justify-between">
        <p className="text-2xl font-bold">Attendance Records</p>
        <div className="inline-flex gap-6">
          <div className="inline-flex items-center gap-2 border cursor-pointer rounded-md p-2 text-xs">
            <GoDownload /> Export CSV
          </div>
          <div
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
          >
            <CiCirclePlus className="text-xl " />
            Take Attendance
          </div>

          {/* Attendance Modal (Conditional Rendering) */}

          {/* 🟢 Modal Overlay */}
          {isOpen && (
            <TakeAttendanceModal
              setIsModalOpen={setIsModalOpen}
              setIsOpen={setIsOpen}
            />
          )}
          {isModalOpen && (
            <TakeManuallyModal onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>

      {/* Table */}
      <div className="p-6 border mx-6">
        <div className="flex justify-between items-center">
          <div className="relative w-96 ">
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-x-4">
            <div className="inline-flex items-center gap-2 border cursor-pointer rounded-md p-2 text-xs">
              Date <MdKeyboardArrowDown />
            </div>
            <div className="inline-flex items-center gap-2 border cursor-pointer rounded-md p-2 text-xs">
              Grade A <MdKeyboardArrowDown />
            </div>
            <div className="inline-flex items-center gap-2 border cursor-pointer rounded-md p-2 text-xs">
              English Subject <MdKeyboardArrowDown />
            </div>
          </div>
        </div>

        <AttendanceTable />

        <Pagination />
      </div>
    </div>
  );
};

export default Attendance;
