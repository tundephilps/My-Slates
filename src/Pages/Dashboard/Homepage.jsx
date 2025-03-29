import React from "react";
import Header from "../../components/Layout/Header";
import { FaChartBar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import StatCards from "../../components/Homepage/StatsCard";
import StudentList from "../../components/Homepage/StudentList";
import QuizPerformanceChart from "../../components/Homepage/PieChart";
import StudentsEngagement from "../../components/Homepage/StudentEngagement";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className="grid lg:grid-cols-3 grid-cols-1  ">
        <div className="col-span-2 gap-4 space-y-8 py-12  border-r px-6 ">
          <StatCards />
          <StudentList />
        </div>
        <div className="p-4">
          <QuizPerformanceChart />
          <StudentsEngagement />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
