import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { IoClose } from "react-icons/io5";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaTimesCircle,
  FaUserEdit,
} from "react-icons/fa";
import Face from "../../assets/Face2.png";
import { MdFace } from "react-icons/md";

const TakeAttendanceModal = ({ setIsOpen, setIsModalOpen }) => {
  const [cameraModalOpen, setCameraModalOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setCameraModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      {/* 📝 Modal Box */}
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 text-center animate-fadeIn">
        {/* Title */}
        <h2 className="text-lg font-semibold">Take Attendance</h2>

        {/* 📌 Options */}
        <div className="mt-4 space-y-4">
          {/* 📜 Take Manually */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col gap-6 items-center w-full px-4 py-3 border rounded-lg bg-[#f5f7fa]  hover:bg-gray-100 transition"
          >
            <FaUserEdit className="text-blue-600 text-2xl mr-2" />
            <span>Take Manually</span>
          </button>

          {/* 🤳 Take with Face Scan */}
          <button
            className="flex flex-col gap-6 items-center w-full px-4 py-3 border rounded-lg bg-[#f5f7fa] hover:bg-gray-100 transition"
            onClick={() => setCameraModalOpen(true)}
          >
            <MdFace className="text-green-600 text-2xl mr-2" />
            <span>Take with Face Scan</span>
          </button>
        </div>

        {/* Display Captured Image */}
        {capturedImage && (
          <img
            src={capturedImage}
            alt="Captured"
            className="mt-4 w-48 h-48 rounded-lg shadow-md"
          />
        )}

        {/* Camera Modal */}
        {cameraModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-md w-full"
              />

              <div className="flex justify-between mt-4">
                <button
                  onClick={capturePhoto}
                  className="bg-[#0598ce] text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Snap Picture
                </button>
                <button
                  onClick={() => setCameraModalOpen(false)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ❌ Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 text-red-600 font-semibold hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TakeAttendanceModal;
