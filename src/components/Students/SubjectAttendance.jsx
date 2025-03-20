import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Present", value: 80, color: "#1E90FF" },
  { name: "Absent", value: 20, color: "#ADD8E6" },
];

export default function SubjectAttendance() {
  const [subject, setSubject] = useState("English Subject");
  const [timeframe, setTimeframe] = useState("This month");

  return (
    <div className="bg-white p-6 w-full ">
      {/* Dropdowns */}
      <div className="flex justify-between mb-4">
        <select
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>English Subject</option>
          <option>Math Subject</option>
          <option>Science Subject</option>
        </select>
        <select
          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option>This month</option>
          <option>Last month</option>
          <option>Last 3 months</option>
        </select>
      </div>

      {/* Chart */}
      <h2 className="text-lg font-semibold mb-2">Subject Attendance</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
