import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import Face2 from "../../assets/Face2.png";
import { IoFilter } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const STUDENTS_DATA = [
  {
    id: 1,
    name: "Taofeequah Bello",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 1",
    subjects: ["English", "Biology", "Basic Science"],
    additionalScore: "+4",
  },
  {
    id: 2,
    name: "Taofeequah Bello",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 2",
    subjects: ["Chemistry"],
    additionalScore: "+4",
  },
  {
    id: 3,
    name: "Taofeequah Bello",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 3",
    subjects: ["English"],
    additionalScore: null,
  },
  {
    id: 4,
    name: "Ashir Benya",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 4",
    subjects: ["English", "Biology"],
    additionalScore: null,
  },
  {
    id: 5,
    name: "Abdulrahman Sadiq",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "SSS 1",
    subjects: ["Physics"],
    additionalScore: null,
  },
  {
    id: 6,
    name: "Titilope Tijani",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "SSS 2",
    subjects: ["Physics"],
    additionalScore: null,
  },
  {
    id: 7,
    name: "Victoria Eugene",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 1",
    subjects: ["Physics"],
    additionalScore: null,
  },
  {
    id: 8,
    name: "Victoria Eugene",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 1",
    subjects: ["Chemistry", "Biology"],
    additionalScore: null,
  },
  {
    id: 9,
    name: "Victoria Eugene",
    email: "taofeequahbello@gmail.com",
    phone: "09034576891",
    grade: "Grade 1",
    subjects: ["Chemistry", "Biology"],
    additionalScore: null,
  },
  {
    id: 10,
    name: "James Anderson",
    email: "james.anderson@gmail.com",
    phone: "09034576892",
    grade: "SSS 3",
    subjects: ["Physics", "Chemistry"],
    additionalScore: "+3",
  },
  {
    id: 11,
    name: "Sarah Mitchell",
    email: "sarah.mitchell@gmail.com",
    phone: "09034576893",
    grade: "Grade 2",
    subjects: ["English", "Basic Science"],
    additionalScore: "+5",
  },
  {
    id: 12,
    name: "Michael Chang",
    email: "michael.chang@gmail.com",
    phone: "09034576894",
    grade: "SSS 1",
    subjects: ["Biology", "Chemistry"],
    additionalScore: "+2",
  },
  // Add more student data as needed...
];

const SubjectTag = ({ subject }) => {
  const getTagColor = (subject) => {
    const colors = {
      English: "bg-blue-50 text-blue-600",
      Biology: "bg-green-50 text-green-600",
      "Basic Science": "bg-purple-50 text-purple-600",
      Chemistry: "bg-pink-50 text-pink-600",
      Physics: "bg-orange-50 text-orange-600",
    };
    return colors[subject] || "bg-gray-50 text-gray-600";
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagColor(
        subject
      )}`}
    >
      {subject}
    </span>
  );
};

const StudentsTable = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/StudentDetails"); // Update the route as needed
  };

  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 6;

  const renderPaginationButton = (pageNumber) => {
    const isActive = pageNumber === currentPage;
    return (
      <button
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  return (
    <div className="bg-[#fcfeff] mx-auto p-6">
      <div className="bg-white rounded-lg border">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-[#101828]">
            List of Students
          </h2>
          <button className="inline-flex items-center px-3 py-1.5 text-sm text-gray-800 border rounded-lg hover:bg-gray-50">
            <IoFilter className="w-4 h-4 mr-2" />
            Apply filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50/50">
                <th className="w-6 px-4 py-3">
                  <input type="checkbox" className="rounded text-blue-500" />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Student Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Grade Level
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Subjects
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {STUDENTS_DATA.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={handleClick}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="rounded text-blue-500 hidden"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <img
                        src={Face2}
                        alt={student.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {student.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {student.phone}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {student.grade}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {student.subjects.map((subject, index) => (
                        <SubjectTag key={index} subject={subject} />
                      ))}
                      {student.additionalScore && (
                        <span className="text-xs text-gray-500">
                          {student.additionalScore}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-1 p-4 border-t">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50"
          >
            <MdChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            renderPaginationButton
          )}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-50"
          >
            <MdChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
