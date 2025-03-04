import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddScheduleModal from "../../../components/Schedule/AddScheduleModal";
import { CiCirclePlus } from "react-icons/ci";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([
    {
      title: "Dentist Clinic",
      start: new Date(2024, 10, 5, 9, 0),
      end: new Date(2024, 10, 5, 10, 0),
    },
  ]);

  const handleSelectSlot = ({ start, end }) => {
    setIsModalOpen(true);
    // You can pass `start` and `end` times to the modal for scheduling
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-2xl font-bold">November 2024</p>
        <div
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
        >
          <CiCirclePlus className="text-xl" /> Add ScheduleCalendar
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        style={{ height: 500 }}
      />

      {isModalOpen && (
        <AddScheduleModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default ScheduleCalendar;
