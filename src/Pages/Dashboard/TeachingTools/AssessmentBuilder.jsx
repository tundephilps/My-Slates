import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import GeneratedQuestions from "../../../components/TeachingTools/GeneratedQuestions";

const AssessmentBuilder = () => {
  const [formData, setFormData] = useState({
    questionType: "Fill in the Blanks",
    grade: "",
    subject: "",
    numQuestions: 1,
    topic: "",
    file: null,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      ["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)
    ) {
      if (selectedFile.size <= 10 * 1024 * 1024) {
        setFormData({ ...formData, file: selectedFile });
      } else {
        alert("File size exceeds 10MB limit.");
      }
    } else {
      alert("Invalid file type. Please upload JPEG, PNG, or SVG.");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-blue-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg p-6 rounded-lg grid grid-cols-2 gap-6">
        {/* Left Panel - Form */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Assessment Builder Prompt
          </h2>

          <div className="space-y-2">
            {/* Question Type */}
            <div>
              <label className="text-xs">Question Type</label>
              <select name="questionType" className="w-full p-2 border rounded">
                <option>Fill in the Blanks</option>
                <option>Multiple Choice</option>
                <option>True/False</option>
              </select>
            </div>
            {/* Grade */}

            <div>
              <label className="text-xs">Grade</label>
              <select name="grade" className="w-full p-2 border rounded">
                <option>Grade</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
              </select>
            </div>

            {/* Subject */}

            <div>
              <label className="text-xs">Subject</label>
              <select name="subject" className="w-full p-2 border rounded">
                <option>Subject</option>
                <option>Math</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>

            {/* Question Type & No of Questions */}

            <div className="grid-cols-2 gap-4 grid w-full">
              <div className="flex flex-col">
                <label className="text-xs">Question Type</label>
                <select
                  name="questionType"
                  className="w-full p-2 border rounded"
                >
                  <option>Multiple Choice</option>
                  <option>Fill in the Blanks</option>
                  <option>True/False</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs">No of Questions (max 20)</label>
                <input
                  type="number"
                  name="numQuestions"
                  min="1"
                  max="20"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            {/* Topic */}
            <div>
              <label className="text-xs">Topic, Keyword or Description</label>
              <input
                type="text"
                name="topic"
                placeholder="Topic, Keyword or Description"
                className="w-full p-2 border rounded"
              />
            </div>
            {/* File Upload */}

            <div className="border bg-[#f3fbf9] rounded-lg flex flex-row items-center p-4 justify-between">
              <div className="inline-flex gap-6">
                <div className="p-2 bg-white flex rounded-full">
                  <FiUploadCloud />
                </div>
                <div className="text-xs space-y-1">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <p>Tap to Upload</p>
                  </label>
                  <p className="text-gray-600">JPEG,PNG,SVG | 10MB max.</p>
                </div>
              </div>

              <div className="text-sm text-white py-2 px-4 rounded-md bg-[#0598ce] cursor-pointer">
                Upload
              </div>
            </div>
            {formData.file && (
              <p className="text-sm mt-2">{formData.file.name}</p>
            )}
            {/* Generate Button */}
            <button className="w-full p-3 bg-[#0598ce] text-white rounded hover:bg-blue-600">
              Generate
            </button>
          </div>
        </div>

        {/* Right Panel - Generated Questions */}
        <div>
          <GeneratedQuestions />
        </div>
      </div>
    </div>
  );
};

export default AssessmentBuilder;
