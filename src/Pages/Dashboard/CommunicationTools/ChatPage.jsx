import React from "react";
import { FaSearch, FaEllipsisH, FaPaperPlane } from "react-icons/fa";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-300 p-4 bg-[#f8fafc]">
        <h2 className="text-xl font-bold mb-4">Inbox</h2>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div>
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#eef2ff] text-[#0598ce] flex items-center justify-center rounded-full">
                SL
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Silas Paul</h3>
                <p className="text-sm text-gray-500">
                  Enter your message description here...
                </p>
              </div>
              <span className="text-xs text-gray-500">12:25</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-300 flex justify-between items-center bg-[#f1f5f9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
              X
            </div>
            <h2 className="text-lg font-bold">X_AE_A-13b</h2>
          </div>
          <FaEllipsisH className="text-gray-500 cursor-pointer" />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 bg-white overflow-y-auto">
          <div className="text-center text-gray-500 text-sm mb-4">25 April</div>
          <div className="flex flex-col gap-3">
            <div className="self-start bg-white p-3 rounded-lg shadow-md max-w-xs">
              Hello Wunmi
            </div>
            <div className="self-start bg-white p-3 rounded-lg shadow-md max-w-xs">
              Hello Wunmi. Have you seen the latest holographic display
              technology?
            </div>
            <div className="self-end bg-[#047aa5] text-white p-3 rounded-lg shadow-md max-w-xs">
              Hi Mr Bello, How are you doing? I have a few questions please
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-300 bg-white flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-md p-2"
          />
          <button className="ml-3 bg-[#047aa5] text-white p-2 rounded-md">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
