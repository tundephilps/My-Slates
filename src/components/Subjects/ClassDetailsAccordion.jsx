import { useState } from "react";
import { FaBook, FaClipboard, FaQuestionCircle, FaUsers } from "react-icons/fa";
import Book from "../../assets/Book.png";

import Book2 from "../../assets/Book2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import StudentList from "./StudentList";
import LessonDetailsModal from "./LessonDetailsModal";
import AssignmentDetailsModal from "./AssignmentDetailsModal";

const ClassDetailsAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModal2Open, setIsModal2Open] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mx-auto p-4 bg-white shadow-md rounded-2xl">
      {/** Accordion Item: Lessons */}
      <div>
        <div
          className="flex items-center justify-between py-4 border-b cursor-pointer"
          onClick={() => toggleSection("lessons")}
        >
          <div className="flex items-center gap-3">
            <FaBook className="text-blue-400" />
            <span className="text-lg font-medium">Lessons</span>
          </div>
          <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
        </div>
        {openSection === "lessons" && (
          <div className="p-4">
            <div className="inline-flex items-center w-full justify-between cursor-pointer">
              <div className="inline-flex gap-6">
                <img src={Book} className="h-12" />
                <div>
                  <p className="text-gray-700">LESSON 1</p>

                  <p className="font-semibold">Introduction to Economics</p>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>

            <div className="w-full items-center justify-center flex mt-12">
              <div
                className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
                onClick={() => setIsModalOpen(true)}
              >
                <CiCirclePlus className="text-xl " />
                Add New Lessons
              </div>
            </div>
          </div>
        )}

        {isModalOpen && (
          <LessonDetailsModal onClose={() => setIsModalOpen(false)} />
        )}
      </div>

      {/** Accordion Item: Assignment */}
      <div>
        <div
          className="flex items-center justify-between py-4 border-b cursor-pointer"
          onClick={() => toggleSection("assignment")}
        >
          <div className="flex items-center gap-3">
            <FaClipboard className="text-blue-400" />
            <span className="text-lg font-medium">Assignment</span>
          </div>
          <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
        </div>
        {openSection === "assignment" && (
          <div className="p-4">
            <div className="inline-flex items-center w-full justify-between cursor-pointer">
              <div className="inline-flex gap-6">
                <img src={Book2} className="h-12" />
                <div>
                  <p className="text-gray-700">
                    How do you search for inspiration when discussing the MVP of
                    your design
                  </p>

                  <p className="font-semibold">
                    LESSON 1-Introduction to Economics
                  </p>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </div>

            <div className="w-full items-center justify-center flex mt-12">
              <div
                onClick={() => setIsModal2Open(true)}
                className="inline-flex items-center font-bold gap-2 cursor-pointer rounded-md p-2 text-xs bg-[#0598ce] text-white"
              >
                <CiCirclePlus className="text-xl " />
                Add New Assignment
              </div>
            </div>
          </div>
        )}
        {isModal2Open && (
          <AssignmentDetailsModal onClose={() => setIsModal2Open(false)} />
        )}
      </div>

      {/** Accordion Item: Quizzes */}
      <div>
        <div
          className="flex items-center justify-between py-4 border-b cursor-pointer"
          onClick={() => toggleSection("quizzes")}
        >
          <div className="flex items-center gap-3">
            <FaQuestionCircle className="text-blue-400" />
            <span className="text-lg font-medium">Quizzes</span>
          </div>
          <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
        </div>
        {openSection === "quizzes" && (
          <div className="p-4">❓ Quiz Content Here</div>
        )}
      </div>

      {/** Accordion Item: Students */}
      <div>
        <div
          className="flex items-center justify-between py-4 cursor-pointer"
          onClick={() => toggleSection("students")}
        >
          <div className="flex items-center gap-3">
            <FaUsers className="text-blue-400" />
            <span className="text-lg font-medium">Students</span>
          </div>
          <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
        </div>
        {openSection === "students" && (
          <div className="p-4">
            <StudentList />
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetailsAccordion;
