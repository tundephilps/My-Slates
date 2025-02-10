import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Loading from "../../../assets/Loading.svg";
import Header from "../../../components/Layout/Header";

const FeedbackBot = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackType, setFeedbackType] = useState("Semantic Feedback");
  const [extraInfo, setExtraInfo] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Instead of alert, navigate to FeedbackBotResponse page
      // You can also pass state data to the new route if needed
      navigate("/FeedbackBotResponse", {
        state: {
          feedbackType,
          fileName: file?.name,
          extraInfo,
        },
      });
    }, 3000);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Left Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 border p-5 rounded-lg shadow bg-white"
        >
          <label className="block text-gray-700 font-semibold mb-2">
            Feedback Type
          </label>
          <select
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option>Semantic Feedback</option>
            <option>Grammar Feedback</option>
            <option>Content Feedback</option>
          </select>

          {/* File Upload Section */}
          <div className="mt-4 border-2 border-dashed border-gray-300 bg-[#f3fbf9] p-6 rounded-lg text-center">
            <label className="cursor-pointer flex flex-col items-center">
              <FaCloudUploadAlt className="text-blue-500 text-4xl mb-2" />
              <input
                type="file"
                accept="image/png, image/jpeg, image/svg"
                className="hidden"
                onChange={handleFileChange}
              />
              {file ? (
                <p className="text-gray-700">{file.name}</p>
              ) : (
                <p className="text-gray-500">
                  Choose a file to upload or drag and drop here <br />
                  (SVG, PNG, JPG - max 800x400px)
                </p>
              )}
            </label>
            <button
              type="button"
              className="mt-3  text-[#0598ce] py-1 px-4 rounded-lg "
            >
              Upload
            </button>
          </div>

          {/* Extra Information Input */}
          <label className="block text-gray-700 font-semibold mt-4 text-xs">
            Anything else you want to be considered in the feedback?
          </label>
          <textarea
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. feedback length"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-[#0598ce] text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Generate
          </button>
        </form>

        {/* Right Loading/Processing Section */}
        <div className="w-full md:w-1/2 border p-6 rounded-lg shadow bg-white flex flex-col items-center justify-center">
          {isLoading ? (
            <>
              <img src={Loading} alt="Loading" className="w-80 h-40" />
              <p className="text-gray-600 mt-2 text-center">
                Just a moment... <br /> We're analyzing your request and
                building your assessment questions.
              </p>
            </>
          ) : (
            <>
              <MdOutlineFeedback className="text-blue-500 text-6xl" />
              <p className="text-gray-600 mt-2 text-center">
                Upload a file to start generating feedback.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBot;
