import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Eng", percentage: 70 },
  { subject: "Math", percentage: 85 },
  { subject: "Lib", percentage: 55 },
  { subject: "Yor", percentage: 60 },
  { subject: "Obj", percentage: 80 },
  { subject: "Dic", percentage: 90 },
  { subject: "Cem", percentage: 68 },
  { subject: "Ora", percentage: 75 },
];

export default function SubjectPerformance() {
  const [timeframe, setTimeframe] = useState("This month");

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-lg font-semibold">Subject Performance</h2>
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
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="subject" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="percentage" fill="#1E90FF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      {/* Labels */}
      <p className="text-center text-sm text-gray-500 mt-2">Subjects</p>
    </div>
  );
}
