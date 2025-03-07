import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/Logo3.png";
import { BsFileBarGraph } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import { MdOutlineLogout, MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import Face from "../../assets/Logo2.png";
import { LuUsers } from "react-icons/lu";

const Sidebar = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const baseClasses =
      "flex items-center gap-3 p-3 rounded-lg mt-2 cursor-pointer";
    const isActive = location.pathname === path;

    return isActive
      ? `${baseClasses} text-[#2c0d10] bg-[#f8fdff]`
      : `${baseClasses} text-gray-600 hover:bg-gray-100`;
  };

  return (
    <div className="min-h-screen h-full whitespace-nowrap bg-[#ffffff]  border-r  flex flex-col justify-between">
      {/* Logo and Menu */}
      <div>
        {/* Logo */}
        <div className="py-8">
          <img src={Logo} alt="Sway Logo" className="h-6 pl-4" />
        </div>

        {/* Menu Items */}
        <nav className="px-2">
          <ul>
            <Link to="/Dashboard" className={getLinkClassName("/Dashboard")}>
              <BsFileBarGraph className="text-lg" />
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link to="/Subjects" className={getLinkClassName("/Subjects")}>
              <RiCheckboxMultipleLine className="text-lg" />
              <span className="text-sm font-medium">Subjects</span>
            </Link>
            <Link to="/Students" className={getLinkClassName("/Students")}>
              <LuUsers className="text-lg" />
              <span className="text-sm font-medium">Students</span>
            </Link>
            <Link
              to="/TeachingTools"
              className={getLinkClassName("/TeachingTools")}
            >
              <GoStack className="text-lg" />
              <span className="text-sm font-medium">Teaching Tools</span>
            </Link>
            <Link to="/ChatPage" className={getLinkClassName("/ChatPage")}>
              <GoStack className="text-lg" />
              <span className="text-sm font-medium">Communication Tools</span>
            </Link>
            <Link to="/Attendance" className={getLinkClassName("/Attendance")}>
              <GoStack className="text-lg" />
              <span className="text-sm font-medium">Attendances</span>
            </Link>
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="py-4 px-2  ">
        {/* Add Admin */}
        <Link
          to="/Settings"
          //   className="flex items-center justify-start gap-3  py-4"
          className={getLinkClassName("/Settings")}
        >
          <button className=" text-[#344054] text-2xl hover:text-gray-600">
            <MdOutlineSettings />
          </button>
          <p className="text-sm font-bold text-[#344054]">Settings</p>
        </Link>
        {/* User Info */}
        <Link
          to="/"
          className={getLinkClassName("/Login")}
          //</div>  className="flex items-center justify-start gap-3 border-t  pt-4"
        >
          <button className=" text-[#344054] text-2xl hover:text-gray-600">
            <MdOutlineLogout />
          </button>
          <p className="text-sm font-bold text-[#344054]">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
