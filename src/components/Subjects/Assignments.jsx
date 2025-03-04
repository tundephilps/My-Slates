import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddAssignment = () => {
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
    <div className="grid grid-cols-3 p-4">
      {/* Title */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Add Assignment
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Fill the assignment question here
        </p>
      </div>

      <div className="col-span-2">
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
                <p className="text-sm text-gray-600 mt-2">
                  {files[index].name}
                </p>
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
    </div>
  );
};

export default AddAssignment;
