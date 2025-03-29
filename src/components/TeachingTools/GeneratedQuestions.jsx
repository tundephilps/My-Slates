import React, { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";

const GeneratedQuestions = () => {
  const [questions, setQuestions] = useState([
    {
      question:
        "What do graphic designers use to create colorful pictures and logos?",
      options: ["Crayons", "Computers", "Toys", "Books"],
      answer: "B) Computers",
    },
    {
      question:
        "What do animators use to make characters move in cartoons and movies?",
      options: ["Magic wands", "Pencils", "Cameras", "Animation software"],
      answer: "D) Animation software",
    },
    {
      question: "Which tool is used to draw straight lines in graphic design?",
      options: ["Ruler", "Eraser", "Paintbrush", "Scissors"],
      answer: "A) Ruler",
    },
  ]);

  const copyToClipboard = () => {
    const text = questions
      .map(
        (q, index) =>
          `Question ${index + 1}: ${q.question}\nA) ${q.options[0]}\nB) ${
            q.options[1]
          }\nC) ${q.options[2]}\nD) ${q.options[3]}\n\nAnswer: ${q.answer}\n`
      )
      .join("\n");
    navigator.clipboard.writeText(text);
    alert("Questions copied to clipboard!");
  };

  const regenerateQuestions = () => {
    // Simulating regeneration (Replace with API call if needed)
    const newQuestions = [
      {
        question: "What software is commonly used for photo editing?",
        options: ["Excel", "Photoshop", "PowerPoint", "Word"],
        answer: "B) Photoshop",
      },
      {
        question: "What does UX stand for in design?",
        options: [
          "User Xperience",
          "Ultra X-ray",
          "Unified Exchange",
          "User Experience",
        ],
        answer: "D) User Experience",
      },
      {
        question: "Which color is made by mixing red and blue?",
        options: ["Purple", "Green", "Yellow", "Black"],
        answer: "A) Purple",
      },
    ];
    setQuestions(newQuestions);
  };

  return (
    <div className=" bg-white shadow-md px-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">
        Generated Assignment Questions
      </h2>

      <div className="border p-4 rounded-lg space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">
              Question {index + 1}: <span className="italic">{q.question}</span>
            </p>
            <p>A) {q.options[0]}</p>
            <p>B) {q.options[1]}</p>
            <p>C) {q.options[2]}</p>
            <p>D) {q.options[3]}</p>
          </div>
        ))}
        <hr />
        {questions.map((q, index) => (
          <p key={index} className="mt-2 font-semibold">
            Answer {index + 1}: <span className="italic">{q.answer}</span>
          </p>
        ))}
      </div>

      <div className="flex justify-end space-x-4 py-4">
        <button
          onClick={copyToClipboard}
          className="bg-[#0598ce] inline-flex items-center gap-2 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <LuCopy /> Copy
        </button>
        <button
          onClick={regenerateQuestions}
          className="shadow-lg  inline-flex items-center gap-2 text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
        >
          <FaArrowsRotate /> Regenerate
        </button>
      </div>
    </div>
  );
};

export default GeneratedQuestions;
