import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { range: "1-10", attendance: 12 },
  { range: "11-20", attendance: 14 },
  { range: "21-30", attendance: 21 },
  { range: "31-40", attendance: 15 },
  { range: "41-50", attendance: 23 },
];

const StudentEngagement = () => {
  const [activeTab, setActiveTab] = useState("This month");

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-2xl">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Students Engagement
          </h2>
        </div>

        <div className="flex items-center  mb-6">
          <button
            className={`px-4 py-1.5 rounded-l-lg text-sm border flex items-center ${
              activeTab === "This month"
                ? "bg-[#f9fafb] text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("This month")}
          >
            <GoDotFill className="text-green-700 " /> This month
          </button>
          <button
            className={`px-4 py-1.5  rounded-r-lg text-sm border ${
              activeTab === "Last month"
                ? "bg-[#f9fafb] text-black"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("Last month")}
          >
            Last month
          </button>
          <button className="ml-auto p-1.5 text-gray-400 hover:bg-gray-100 rounded-full">
            +
          </button>
        </div>
      </div>

      <div className="h-full bg-[#f5f8fc]">
        <div className="flex items-center gap-2 mb-2 px-8 rounded-md">
          <h3 className="text-base font-medium text-gray-800">Attendance</h3>
          <button className="ml-auto p-1.5 text-gray-400 hover:bg-gray-100 rounded-full">
            ⓘ
          </button>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="range"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              domain={[0, 25]}
              ticks={[0, 5, 10, 15, 20, 25]}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              contentStyle={{
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            />
            <Bar
              dataKey="attendance"
              fill="#2597d0"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentEngagement;
