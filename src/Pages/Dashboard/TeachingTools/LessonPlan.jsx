import React from "react";
import Header from "../../../components/Layout/Header";
import { HiMiniArrowPath } from "react-icons/hi2";
import { IoCopyOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const LessonPlan = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 p-6  min-h-screen">
        {/* Left Side: Lesson Note Generator */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Lesson Note Generator</h2>

          {/* Form Fields */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <select className="border rounded-lg p-2 w-full">
                <option>Select Term</option>
              </select>
              <select className="border rounded-lg p-2 w-full">
                <option>Select Week</option>
              </select>
            </div>

            <select className="border rounded-lg p-2 w-full">
              <option>Grade</option>
            </select>

            <select className="border rounded-lg p-2 w-full">
              <option>Subject</option>
            </select>

            <input
              type="number"
              placeholder="Class Duration (mins)"
              className="border rounded-lg p-2 w-full"
            />

            <input
              type="text"
              placeholder="Topic, Keyword or Description"
              className="border rounded-lg p-2 w-full"
            />

            {/* File Upload */}
            <div className="border-dashed border-2 rounded-lg p-4 text-center cursor-pointer">
              <p className="text-gray-500 text-sm">Tap to Upload</p>
              <p className="text-xs text-gray-400">
                JPEG, PNG, SVG | 10MB max.
              </p>
            </div>

            <button className="w-full bg-[#0598CE] text-white py-2 rounded-lg hover:bg-blue-600">
              Generate
            </button>
          </div>
        </div>

        {/* Right Side: Generated Lesson Plan */}
        <div className="bg-white p-6 shadow-lg rounded-lg w-full lg:w-2/3">
          <h2 className="text-lg font-semibold mb-4">Generated Lesson Plan</h2>

          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-lg text-blue-700">
              Lesson Plan for Senior Secondary School 2 (S.S.S. 2)
            </h3>

            <div className="text-gray-700 text-sm space-y-2 mt-4">
              <p>
                <strong>• Term:</strong> 1st Term
              </p>
              <p>
                <strong>• Week:</strong> 1
              </p>
              <p>
                <strong>• Subject:</strong> Biology
              </p>
              <p>
                <strong>• Topic:</strong> Animal Cells
              </p>
              <p>
                <strong>• Instructional Resources:</strong> Microscope, prepared
                slides of animal cells, diagrams, textbooks, whiteboard, markers
              </p>
              <p>
                <strong>• Behavioral Objective:</strong> By the end of the
                lesson, students should be able to:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>Identify the structure of an animal cell.</li>
                <li>Describe the function of each part of an animal cell.</li>
                <li>Differentiate between plant and animal cells.</li>
              </ul>
              <p>
                <strong>• Previous Knowledge:</strong> Students have basic
                knowledge of cells from Junior Secondary School.
              </p>
            </div>

            <h3 className="font-semibold text-gray-700 mt-4">
              B. INTRODUCTION
            </h3>
            <p className="text-gray-600 text-sm">Preamble:</p>
            <p className="text-gray-600 text-sm">
              • Greet the students and briefly introduce the topic.
            </p>

            <p className="text-gray-500 text-sm mt-4">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 inline-flex gap-2 items-center">
              <HiMiniArrowPath /> Regenerate
            </button>
            <button className="bg-[#0598CE] text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex gap-2 items-center">
              <IoCopyOutline /> Copy
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 inline-flex gap-2 items-center">
              <LuDownload /> Download as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlan;
