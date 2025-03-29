import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Face from "../../assets/Face2.png";

const LessonDetailsModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [usefulLinks, setUsefulLinks] = useState(["", ""]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile.name);
    }
  };

  const handleUsefulLinkChange = (index, value) => {
    const newLinks = [...usefulLinks];
    newLinks[index] = value;
    setUsefulLinks(newLinks);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-full justify-end overflow-y-auto overscroll-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 ">
          <h2 className="text-xl font-semibold">Lesson Details</h2>
          <button onClick={onClose}>
            <IoClose className="text-xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <div className=" text-xs">
          {/* Lesson Title */}
          <div className="mb-4">
            <label className="block font-semibold">Lesson Title</label>
            <input
              type="text"
              placeholder="e.g Introduction to Economics"
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>

          {/* Lesson Description */}
          <div className="mb-4">
            <label className="block font-semibold">Lesson Description</label>
            <textarea
              placeholder="The lesson is supposed"
              className="w-full mt-1 p-2 border rounded-md"
              maxLength={200}
            ></textarea>
          </div>

          {/* Lesson Content */}
          <div className="mb-4">
            <label className="block font-semibold">Lesson Content</label>
            <textarea
              placeholder="Tell us about the Lesson"
              className="w-full mt-1 p-2 border rounded-md"
            ></textarea>
          </div>

          {/* Resource File Upload */}
          <div className="border p-4 rounded-md mb-4">
            <label className="block font-semibold mb-2">Resource File</label>
            <div className="border p-4 flex items-center justify-between rounded-md cursor-pointer">
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="fileUpload"
                className="flex items-center cursor-pointer"
              >
                {file ? (
                  <span className="text-sm">{file}</span>
                ) : (
                  <span className="text-gray-500">Tap to Upload</span>
                )}
              </label>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                Upload
              </button>
            </div>
          </div>

          {/* Video URL */}
          <div className="mb-4">
            <label className="block font-semibold">Video URL</label>
            <input
              type="text"
              placeholder="http://youtube.com/designmunch/video"
              className="w-full mt-1 p-2 border rounded-md"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          {/* Useful Links */}
          {usefulLinks.map((link, index) => (
            <div key={index} className="mb-4">
              <label className="block font-semibold">
                Useful Link URL {index + 1}
              </label>
              <input
                type="text"
                placeholder="http://youtube.com/designmunch/video"
                className="w-full mt-1 p-2 border rounded-md"
                value={link}
                onChange={(e) => handleUsefulLinkChange(index, e.target.value)}
              />
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex justify-between mt-4">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">
              Edit Lesson
            </button>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md">
              Delete Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetailsModal;
