import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";

export default function AttendanceCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date()); // Current Month
  const presentDays = [1, 2, 3, 4, 5, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26]; // Example
  const absentDays = [8, 9, 10, 19, 29];

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(selectedMonth),
    end: endOfMonth(selectedMonth),
  });

  return (
    <div className="p-6  w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <div className="flex space-x-2">
          {/* Month Dropdown */}
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm"
            onChange={(e) =>
              setSelectedMonth(new Date(2024, e.target.value, 1))
            }
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {format(new Date(2024, i, 1), "MMMM")}
              </option>
            ))}
          </select>

          {/* Course Dropdown (Placeholder) */}
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Course</option>
          </select>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-600 inline-block rounded-full mr-1"></span>
          <span className="text-sm">Total Present</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-300 inline-block rounded-full mr-1"></span>
          <span className="text-sm">Total Absent</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Week Days */}
        {["MON", "TUE", "WED", "THURS", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day} className="text-xs font-semibold text-gray-500">
            {day}
          </div>
        ))}

        {/* Blank Spaces for Alignment */}
        {Array(getDay(startOfMonth(selectedMonth)))
          .fill(null)
          .map((_, i) => (
            <div key={i} className="p-3"></div>
          ))}

        {/* Days */}
        {daysInMonth.map((day) => {
          const dayNum = day.getDate();
          const isPresent = presentDays.includes(dayNum);
          const isAbsent = absentDays.includes(dayNum);

          return (
            <div
              key={dayNum}
              className={`p-3 rounded-md text-white font-semibold ${
                isPresent
                  ? "bg-blue-600"
                  : isAbsent
                  ? "bg-blue-300"
                  : "bg-gray-200"
              }`}
            >
              {dayNum}
            </div>
          );
        })}
      </div>
    </div>
  );
}
