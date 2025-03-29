import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Avatar from "../../assets/Avatar.png";

const students = [
  {
    name: "Taofeeqah Bello",
    avatar: Avatar,
    attendance: [
      "Absent",
      "Absent",
      "Absent",
      "Excused",
      "Absent",
      "Absent",
      "Excused",
      "Absent",
    ],
  },
  {
    name: "Ashir Benya",
    avatar: Avatar,
    attendance: [
      "Present",
      "Present",
      "Present",
      "Present",
      "Present",
      "Absent",
      "Excused",
      "Absent",
    ],
  },
  {
    name: "Abdulrahman Sodiq",
    avatar: Avatar,
    attendance: [
      "Present",
      "Absent",
      "Present",
      "Present",
      "Present",
      "Absent",
      "Excused",
      "Absent",
    ],
  },
  {
    name: "Titiiope Tijani",
    avatar: Avatar,
    attendance: [
      "Absent",
      "Excused",
      "Present",
      "Absent",
      "Present",
      "Absent",
      "Excused",
      "Absent",
    ],
  },
  {
    name: "Victoria Eugene",
    avatar: Avatar,
    attendance: [
      "Absent",
      "Present",
      "Present",
      "Present",
      "Present",
      "Absent",
      "Excused",
      "Absent",
    ],
  },
];

const attendanceConfig = {
  Present: {
    color: "text-green-600 bg-green-100",
    icon: <FaCheckCircle className="text-green-600" />,
  },
  Absent: {
    color: "text-red-600 bg-red-100",
    icon: <FaTimesCircle className="text-red-600" />,
  },
  Excused: {
    color: "text-gray-600 bg-gray-100",
    icon: <FaExclamationCircle className="text-gray-600" />,
  },
};

const AttendanceTable = () => {
  return (
    <div className="overflow-x-auto py-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#e3f4fa] text-left">
            <th className="p-3">Student Name</th>
            <th className="p-3">22/11/2024</th>
            <th className="p-3">26/11/2024</th>
            <th className="p-3">28/11/2024</th>
            <th className="p-3">29/12/2024</th>
            <th className="p-3">30/12/2024</th>

            <th className="p-3">22/11/2024</th>
            <th className="p-3">26/11/2024</th>
            <th className="p-3">28/11/2024</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-b">
              <td className="p-3 flex items-center space-x-2">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{student.name}</span>
              </td>
              {student.attendance.map((status, idx) => (
                <td key={idx} className="p-3 w-32">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-medium flex items-center space-x-1 ${attendanceConfig[status].color}`}
                  >
                    {attendanceConfig[status].icon}
                    <span>{status}</span>
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
