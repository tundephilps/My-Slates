import { FaBook, FaUsers } from "react-icons/fa";
import Course from "../../assets/Course.png";

import { useNavigate } from "react-router-dom";

export const CourseCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SubjectDetails"); // Update the route as needed
  };
  return (
    <div
      className=" rounded-md shadow-md overflow-hidden w-full "
      onClick={handleClick}
    >
      <img
        src={Course} // Replace with actual image
        alt="Course Thumbnail"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500">GRADE 1</p>
        <h2 className="text-lg font-bold">Physics</h2>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaBook className="mr-1 text-[#0598ce]" /> 4 Lessons
          <span className="mx-2">|</span>
          <FaUsers className="mr-1 text-[#0598ce]" /> 34 Students
        </div>
      </div>
    </div>
  );
};
