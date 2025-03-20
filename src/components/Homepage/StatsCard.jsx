import { FaChartBar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "../../assets/Profile.png";

import Graph from "../../assets/Graph.png";

export default function StatCards() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {/* Total Students Card */}
      <div className="bg-[#e4e7ec] p-4 rounded-lg shadow-md  w-full">
        <div className="flex items-center justify-between w-full mb-6">
          <img src={Graph} className="h-6" />
          <div className="flex items-center text-gray-500 text-sm">
            Last 30 days <IoIosArrowDown className="ml-1 text-xs" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              5,837{" "}
              <span className="text-green-800 text-xs font-medium bg-green-100 p-1 rounded-full">
                ↑ 15%
              </span>
            </h2>
            <p className="text-gray-500 text-sm">Total Students</p>
          </div>
          <img src={Profile} className="h-12" />
        </div>
      </div>
      {/* Total Students Card */}
      <div className="bg-[#e4e7ec] p-4 rounded-lg shadow-md  w-full">
        <div className="flex items-center justify-between w-full mb-6">
          <img src={Graph} className="h-6" />
          <div className="flex items-center text-gray-500 text-sm">
            Last 30 days <IoIosArrowDown className="ml-1 text-xs" />
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              15{" "}
              <span className="text-green-800 text-xs font-medium bg-green-100 p-1 rounded-full">
                ↑ 15%
              </span>
            </h2>
            <p className="text-gray-500 text-sm">Total Subjects</p>
          </div>
          <img src={Profile} className="h-12" />
        </div>
      </div>
    </div>
  );
}
