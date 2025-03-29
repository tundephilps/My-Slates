import { PieChart, Pie, Cell, Legend } from "recharts";

export default function QuizPerformanceChart() {
  // Dummy data
  const data = [
    { name: "Excellent", value: 25 },
    { name: "Average", value: 30 },
    { name: "Good", value: 20 },
    { name: "Pass", value: 25 },
  ];

  // Colors matching the UI
  const COLORS = ["#D9F0FF", "#002E44", "#004D66", "#56B3E0"];

  return (
    <div className="bg-[#f5f8fc] p-4 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold mb-2">Quiz Performance</h2>
      <div className="flex items-center">
        {/* Pie Chart */}
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Legend */}
        <div className="ml-12 space-y-2">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></span>
              <span className="ml-2 text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
