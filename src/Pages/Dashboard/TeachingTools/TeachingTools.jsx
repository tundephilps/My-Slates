import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Layout/Header";
import { FaRocket, FaRobot } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import Teach4 from "../../../assets/Teach4.png";
import Teach3 from "../../../assets/Teach3.png";
import Teach2 from "../../../assets/Teach2.png";
import Teach1 from "../../../assets/Teach1.png";

const features = [
  {
    title: "Assessment Builder",
    description:
      "This tool helps you generate different types of questions for both tests and exams e.g multiple choice or essay.",
    icon: Teach1,
    IconComponent: AiFillThunderbolt,
    iconColor: "text-yellow-500",
    gradient: "bg-gradient-to-r from-blue-100 to-white",
    path: "/AssessmentBuilder",
  },
  {
    title: "Lesson Plan Generator",
    description:
      "Create Lesson plan for your classes so you can focus on teaching and impacting knowledge to your students.",
    icon: Teach2,
    IconComponent: BsStars,
    iconColor: "text-purple-500",
    gradient: "bg-gradient-to-r from-blue-100 to-white",
    path: "/LessonPlan",
  },
  {
    title: "Feedback Bot",
    description:
      "This tool helps you generate feedback on assignments and test answers of your students in an instant.",
    icon: Teach3,
    IconComponent: FaRobot,
    iconColor: "text-[#0598ce]",
    gradient: "bg-gradient-to-r from-purple-100 to-white",
    path: "/FeedbackBot",
  },
  {
    title: "Chatbot",
    description:
      "Start chatting with Wazzer for any requests or to brainstorm new ideas using AI with ease.",
    icon: Teach4,
    IconComponent: FaRocket,
    iconColor: "text-green-500",
    gradient: "bg-gradient-to-r from-blue-100 to-white",
    path: "/Chatbot",
  },
];

const TeachingTools = () => {
  return (
    <div className="">
      <Header />
      <div className="items-center justify-center flex ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-24">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path} className="block no-underline">
              <div
                className={`rounded-lg cursor-pointer relative shadow-md p-5 flex items-start space-x-4 ${feature.gradient} hover:shadow-lg transition-shadow duration-300`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 absolute top-0 right-0"
                />
                <div>
                  <h3 className="text-lg font-semibold flex items-center">
                    <feature.IconComponent
                      className={`${feature.iconColor} mr-2`}
                    />
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingTools;
