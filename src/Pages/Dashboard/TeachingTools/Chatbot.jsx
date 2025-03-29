import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import botAvatar from "../../../assets/botAvatar.png";
import userAvatar from "../../../assets/Avatar.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const suggestedQuestions = [
    "Explain the concept of...",
    "How do I manage the classroom when...",
    "How can I engage my students in...",
  ];

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Hide the intro and show chat window when first message is sent
    if (showIntro) {
      setShowIntro(false);
    }

    setMessages((prev) => [...prev, { text, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "That's a great question! Here's a helpful answer.",
          sender: "bot",
        },
      ]);
    }, 1500);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100">
      {/* Conditional rendering based on showIntro state */}
      {showIntro ? (
        <>
          {/* Bot Introduction */}
          <div className="text-center mb-4">
            <img
              src={botAvatar}
              alt="Bot"
              className="w-16 h-16 mx-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-2">Hi, I'm Weezer</h2>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              I'm your AI-powered assistant designed to make your teaching
              experience smoother and more efficient. Here are some ideas to get
              you started:
            </p>
          </div>

          {/* Suggested Questions */}
          <div className="flex flex-wrap gap-2 max-w-lg justify-center">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-300"
                onClick={() => handleSendMessage(question)}
              >
                + {question}
              </button>
            ))}
          </div>
        </>
      ) : (
        /* Chat Window - only shown after sending first message */
        <div className="w-full mt-6 bg-transparent rounded-lg p-4 overflow-y-auto h-full">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center mb-4 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <img
                  src={botAvatar}
                  alt="Bot"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-[#035b7c] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <img
                  src={userAvatar}
                  alt="User"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input Section */}
      <div
        className={`w-[80%] flex items-center mt-4 border-t ${
          showIntro ? "pt-[40vh]" : "pt-4"
        }`}
      >
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(input);
            }
          }}
        />
        <button
          onClick={() => handleSendMessage(input)}
          className="ml-3 bg-[#035b7c] text-white p-2 rounded-lg hover:bg-blue-600"
        >
          <FiSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
