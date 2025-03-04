import React from "react";
import Header from "../../../components/Layout/Header";

import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import SubjectInformation from "../../../components/Subjects/SubjectInformation";

import AddLessons from "../../../components/Subjects/AddLessons";
import { useState } from "react";
import AddAssignment from "../../../components/Subjects/Assignments";
import AddQuizzes from "../../../components/Subjects/AddQuizzes";

const steps = [
  {
    title: "Subject Information",
    description: "Fill up the subject details here",
    component: <SubjectInformation />,
  },
  {
    title: "Add Lessons",
    description: "Fill up the lessons details here",
    component: <AddLessons />,
  },
  {
    title: "Assignments",
    description: "Fill up the assignment questions here",
    component: <AddAssignment />,
  },
  {
    title: "Quizzes",
    description: "Fill up the quiz questions here",
    component: <AddQuizzes />,
  },
];

const AddSubject = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const handleProceed = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <Header />
      <div className="p-6 bg-[#fcfeff]">
        <div className="flex items-center text-gray-500 text-sm">
          <button onClick={() => navigate(-1)} className="hover:underline">
            Subjects
          </button>
          <MdKeyboardArrowRight className="w-4 h-4 mx-2" />
          <button className="px-3 py-1 bg-gray-100 text-gray-700 font-semibold rounded-lg">
            Add Subject
          </button>
        </div>

        <div className="bg-white border mt-8 p-12">
          <div className="flex flex-row items-end justify-between border-b pb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={
                  index === currentStep
                    ? "text-black font-bold"
                    : "text-gray-600"
                }
              >
                <p>{step.title}</p>
                <p className="text-[#667185]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">{steps[currentStep].component}</div>

          <div className="justify-between w-full flex">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="inline-flex py-4 px-16 items-center font-bold gap-2 cursor-pointer rounded-md text-sm bg-gray-400 text-white"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleProceed}
              className="inline-flex py-4 px-16 items-center font-bold gap-2 cursor-pointer rounded-md text-sm bg-[#0598ce] text-white"
              disabled={currentStep === steps.length - 1}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
