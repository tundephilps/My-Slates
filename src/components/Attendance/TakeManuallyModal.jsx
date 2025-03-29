import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Face from "../../assets/Face2.png";

const studentsList = [
  { id: 1, name: "Taofeeqah Bello", status: "present" },
  { id: 2, name: "Taofeeqah Bello", status: "absent" },
  { id: 3, name: "Taofeeqah Bello", status: "present" },
  { id: 4, name: "Taofeeqah Bello", status: "excused" },
  { id: 5, name: "Taofeeqah Bello", status: "absent" },
];

const TakeManuallyModal = ({ onClose }) => {
  const [students, setStudents] = useState(studentsList);

  const toggleStatus = (id, status) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-full justify-end">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Attendance</h2>
          <button onClick={onClose}>
            <IoClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Class Details */}
        <div className="mt-4">
          <label className="text-sm font-semibold">Grade</label>
          <select className="w-full p-2 border rounded mt-1">
            <option>Grade A</option>
          </select>
          <label className="text-sm font-semibold mt-4 block">Course</label>
          <select className="w-full p-2 border rounded mt-1">
            <option>Supply and Demand</option>
          </select>

          <label className="text-sm font-semibold mt-4 block">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded mt-1"
            defaultValue="2024-06-08"
          />
        </div>

        {/* Student List */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <input
              type="text"
              placeholder="Search"
              className="w-2/3 p-2 border rounded"
            />
            <button className="ml-2 px-3 py-1  text-black inline-flex gap-2 text-sm rounded">
              <input
                type="checkbox"
                onClick={() =>
                  setStudents(
                    students.map((s) => ({ ...s, status: "present" }))
                  )
                }
              />{" "}
              Mark all as Present
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={Face}
                    alt="avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>{student.name}</span>
                </div>

                <div className="flex space-x-2">
                  <button onClick={() => toggleStatus(student.id, "present")}>
                    <FaCheckCircle
                      className={`text-lg ${
                        student.status === "present"
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                  <button onClick={() => toggleStatus(student.id, "absent")}>
                    <FaTimesCircle
                      className={`text-lg ${
                        student.status === "absent"
                          ? "text-red-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                  <button onClick={() => toggleStatus(student.id, "excused")}>
                    <FaExclamationCircle
                      className={`text-lg ${
                        student.status === "excused"
                          ? "text-slate-500"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#0598ce] text-white p-2 rounded mt-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TakeManuallyModal;
