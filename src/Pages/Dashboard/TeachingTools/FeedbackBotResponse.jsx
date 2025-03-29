import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { MdAttachFile } from "react-icons/md";
import userAvatar from "../../../assets/Avatar.png";
import botAvatar from "../../../assets/botAvatar.png";

const FeedbackBotResponse = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSendMessage = () => {
    if (input.trim() || file) {
      const newMessage = {
        text: input,
        file: file,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");
      setFile(null);
      setLoading(true);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Here is the extracted text from your document.",
            sender: "bot",
          },
        ]);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full mx-auto relative border rounded-lg bg-white p-4">
      {/* Chat Window */}
      <div className="min-h-[84vh] overflow-y-auto p-4 space-y-4 rounded-lg">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src={botAvatar}
                alt="Bot"
                className="w-10 h-10 rounded-full mr-3"
              />
            )}
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-[#035b7c] text-white"
                  : "bg-white shadow"
              }`}
            >
              {msg.text && <p>{msg.text}</p>}
              {msg.file && (
                <div className="mt-2 flex items-center space-x-2 bg-gray-200 p-2 rounded">
                  <MdAttachFile className="text-gray-600" />
                  <span className="text-sm">{msg.file.name}</span>
                </div>
              )}
            </div>
            {msg.sender === "user" && (
              <img
                src={userAvatar}
                alt="User"
                className="w-10 h-10 rounded-full ml-3"
              />
            )}
          </div>
        ))}
        {loading && <p className="text-gray-500 text-sm">Bot is typing...</p>}
      </div>

      {/* Input Section */}
      <div className="flex items-center mt-4 border-t pt-3">
        {/* <label className="cursor-pointer">
          <MdAttachFile className="text-gray-600 text-2xl mr-3" />
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label> */}
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 bg-[#035b7c] text-white p-2 rounded-lg hover:bg-blue-600"
        >
          <FiSend className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackBotResponse;
