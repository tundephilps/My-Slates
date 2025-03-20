import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import { BsClock } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const AddScheduleModal = ({ onClose }) => {
  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("10:00 AM");
  const [isOnline, setIsOnline] = useState(false);
  const [reminder, setReminder] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[25vw] h-full justify-end">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Add Schedule</h2>
          <button onClick={onClose}>
            <IoClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Class Details */}
        <div className="mt-4">
          <div>
            <label className="text-sm font-semibold mt-4 block">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder=""
            />
          </div>

          <div>
            <label className="text-sm font-semibold mt-4 block">Course</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Basic Science</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold mt-4 block">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded mt-1"
              defaultValue="2024-06-08"
            />
          </div>
        </div>

        <div className=" space-y-4">
          {/* Time Selection */}
          <div className="w-full mt-4">
            <label className="text-black text-sm">Time</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-lg px-3 py-2 w-full">
                <BsClock className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="bg-transparent outline-none w-full text-center"
                />
              </div>
              <span className="text-gray-500">→</span>
              <div className="flex items-center border rounded-lg px-3 py-2 w-full">
                <BsClock className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="bg-transparent outline-none w-full text-center"
                />
              </div>
            </div>
          </div>

          {/* Location Selection */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold mt-4 block">Location</label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isOnline}
                onChange={() => setIsOnline(!isOnline)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition">
                <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition peer-checked:translate-x-5"></div>
              </div>
              <span className="ml-2 text-gray-600">Online</span>
            </label>
          </div>
          <div className="relative">
            <input type="text" className="w-full p-2 border rounded " />
            <MdLocationOn className="text-gray-500 absolute top-3 left-2 text-xl" />
          </div>

          {/* Reminder Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Set reminder</span>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={reminder}
                onChange={() => setReminder(!reminder)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 relative transition">
                <div className="absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full transition peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
        </div>
        {/* Submit Button */}
        <button className="w-full bg-[#0598ce]   text-white p-2 rounded mt-4">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddScheduleModal;
