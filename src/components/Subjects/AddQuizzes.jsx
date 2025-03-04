import { useState } from "react";
import { FaBold, FaItalic, FaUnderline, FaStrikethrough } from "react-icons/fa";

import { FaCloudUploadAlt } from "react-icons/fa";

export const QuizQuestion = () => {
  const [questions, setQuestions] = useState([""]);
  const [files, setFiles] = useState({});

  const handleAddQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const handleFileUpload = (event, index) => {
    const newFiles = { ...files, [index]: event.target.files[0] };
    setFiles(newFiles);
  };

  return (
    <div className="w-full">
      {/* Associated Lesson */}
      <label className="block font-bold mb-1">Associated Lesson</label>
      <input
        type="text"
        value="Supply and Demand"
        disabled
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 mb-4"
      />

      {/* Questions */}
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <div>
            <label className="block font-bold mb-1">Question Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="fill-in-the-blanks">Fill in the Blanks</option>
              <option value="essay">Essay</option>
              <option value="short-answer">Multiple Choice</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block font-bold mb-1">Question</label>

            <input
              type="text"
              placeholder="Enter question"
              value={question}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index] = e.target.value;
                setQuestions(newQuestions);
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload */}
          <p className="mt-6 font-bold">Files</p>
          <div className="mt-4 p-6 border border-dashed border-gray-400 rounded-lg text-center">
            <label className="cursor-pointer flex flex-col items-center">
              <FaCloudUploadAlt className="text-4xl text-gray-500" />
              <span className="text-gray-600">Choose a file to upload</span>
              <span className="text-xs text-gray-400">
                SVG, PNG or JPG Formats (max. 10Mb)
              </span>
              <input
                type="file"
                accept=".svg,.png,.jpg"
                className="hidden"
                onChange={(e) => handleFileUpload(e, index)}
              />
            </label>
            {files[index] && (
              <p className="text-sm text-gray-600 mt-2">{files[index].name}</p>
            )}
          </div>
        </div>
      ))}

      {/* Add More Question Button */}
      <button
        onClick={handleAddQuestion}
        className="w-full mt-4 p-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-200"
      >
        Add more Question
      </button>
    </div>
  );
};

const Answers = () => {
  const [options, setOptions] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [correctOption, setCorrectOption] = useState("A");

  const handleOptionChange = (key, value) => {
    setOptions({ ...options, [key]: value });
  };

  return (
    <div>
      <div className="">
        {/* Options */}
        <label className="block text-gray-700 font-semibold mb-2">
          Options
        </label>
        {Object.keys(options).map((key) => (
          <div
            key={key}
            className="flex items-center mb-3 border border-gray-300 rounded-md p-2 "
          >
            <span className="font-semibold text-gray-600 w-24">{`Option ${key}`}</span>
            <input
              type="text"
              placeholder="Enter an answer option"
              value={options[key]}
              onChange={(e) => handleOptionChange(key, e.target.value)}
              className="w-full p-2 border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        {/* Correct Option Selection */}
        <label className="block text-gray-700 font-bold mb-2">
          Correct Option
        </label>
        <div className="flex space-x-4">
          {Object.keys(options).map((key) => (
            <label key={key} className="flex items-center space-x-2">
              <input
                type="radio"
                name="correctOption"
                value={key}
                checked={correctOption === key}
                onChange={() => setCorrectOption(key)}
                className="text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-700">Option {key}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "Quiz Question",
    description: "Fill up the quiz question here",
    component: <QuizQuestion />,
  },
  {
    title: "Answers",
    description: "Fill in the answers to the assignment",
    component: <Answers />,
  },
];

export default function AddQuizzes() {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="flex  mt-8">
      {/* Sidebar */}
      <div className="w-1/4  py-6">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setCurrentTab(index)}
            className={`py-4 cursor-pointer rounded-md mb-2 ${
              index === currentTab ? " text-black" : "text-gray-500"
            }`}
          >
            <p className="font-bold">{tab.title}</p>
            <p className="text-sm">{tab.description}</p>
          </div>
        ))}
        <div>
          <p className="font-medium">
            Click on the button below to add more Quiz questions
          </p>
          <div className="border-2 font-semibold cursor-pointer text-sm p-2 inline-flex rounded-md mt-4">
            Add more questions
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-3/4 p-12 bg-white">{tabs[currentTab].component}</div>
    </div>
  );
}
