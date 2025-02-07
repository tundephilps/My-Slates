import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

export default function StudentList() {
  const [selected, setSelected] = useState([]);
  const students = [
    {
      id: 1,
      name: "Taofeeqah Bello",
      email: "taofeeqahbello@gmail.com",
      subjects: ["English", "Biology", "+4"],
    },
    {
      id: 2,
      name: "Ashir Benya",
      email: "taofeeqahbello@gmail.com",
      subjects: ["Chemistry", "+4"],
    },
    {
      id: 3,
      name: "Abdulrahman Sodiq",
      email: "taofeeqahbello@gmail.com",
      subjects: ["English"],
    },
    {
      id: 4,
      name: "Titilope Tijani",
      email: "taofeeqahbello@gmail.com",
      subjects: ["English", "Biology"],
    },
    {
      id: 5,
      name: "Victoria Eugene",
      email: "taofeeqahbello@gmail.com",
      subjects: ["Physics"],
    },
    {
      id: 6,
      name: "Victoria Eugene",
      email: "taofeeqahbello@gmail.com",
      subjects: ["Chemistry", "Biology"],
    },
    {
      id: 7,
      name: "Victoria Eugene",
      email: "taofeeqahbello@gmail.com",
      subjects: ["Chemistry", "Biology"],
    },
  ];

  const toggleSelectAll = () => {
    if (selected.length === students.length) {
      setSelected([]);
    } else {
      setSelected(students.map((s) => s.id));
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border p-4 rounded-lg shadow-md w-full">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">List of Students</h2>
        <button className="flex items-center border text-xs px-3 py-2 rounded-lg">
          <IoFilterSharp className="mr-2" /> Apply filter
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#e3f4fa] text-left">
            <th className="p-2">
              <input
                type="checkbox"
                onChange={toggleSelectAll}
                checked={selected.length === students.length}
              />
            </th>
            <th className="p-2">Teachers</th>
            <th className="p-2">Email</th>
            <th className="p-2">Subjects</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.includes(student.id)}
                  onChange={() => toggleSelect(student.id)}
                />
              </td>
              <td className="p-2 font-semibold">{student.name}</td>
              <td className="p-2 text-gray-500">{student.email}</td>
              <td className="p-2 flex gap-2">
                {student.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full border border-red-500 text-[#dd2590]"
                  >
                    {subject}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View All Link */}
      <div className="text-blue-600 text-sm text-right mt-4 cursor-pointer">
        View all
      </div>
    </div>
  );
}
