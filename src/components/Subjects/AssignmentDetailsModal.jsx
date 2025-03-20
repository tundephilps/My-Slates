import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Face from "../../assets/Face2.png";

const AssignmentDetailsModal = ({ onClose }) => {
  const [selectedLesson, setSelectedLesson] = useState("Supply and Demand");
  const [question, setQuestion] = useState("");
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile.name);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-full justify-end overflow-y-auto overscroll-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 ">
          <h2 className="text-xl font-semibold">Assignment Details</h2>
          <button onClick={onClose}>
            <IoClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Associated Lesson */}
        <div className="my-4">
          <label className="block font-semibold text-sm mb-1">
            Associated Lesson
          </label>
          <select
            value={selectedLesson}
            onChange={(e) => setSelectedLesson(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option>Supply and Demand</option>
            <option>Market Structures</option>
            <option>Economic Policies</option>
          </select>
        </div>

        {/* Question */}

        <div className="mb-4">
          <label className="block font-semibold text-sm mb-1">Question</label>
          <input
            type="text"
            placeholder="Enter your question"
            className="w-full p-2 border rounded-md"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block font-semibold text-sm mb-1">File</label>
          <div className="border p-4 flex items-center justify-between rounded-md cursor-pointer">
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              accept="image/jpeg, image/png, image/svg"
              onChange={handleFileUpload}
            />
            <label htmlFor="fileUpload" className="cursor-pointer">
              {file ? (
                <span className="text-sm">{file}</span>
              ) : (
                <span className="text-gray-500 text-sm">Tap to Upload</span>
              )}
            </label>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
              Upload
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            JPEG, PNG, SVG | 10MB max.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-[30vh] ">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
            Edit Assignment
          </button>
          <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md">
            Delete Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetailsModal;
