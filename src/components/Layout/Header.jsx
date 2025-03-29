import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import Face from "../../assets/Face.png";
import useUser from "../../Hooks/useUser";

export default function Header() {
  const {user}=useUser();
  return (
    <div className="flex items-center justify-between border-b bg-white px-6 py-3 shadow-sm">
      {/* Greeting Text */}
      <h1 className="text-lg font-bold">Hello {user?.firstname} {user?.lastname}</h1>

      {/* Search Bar */}
      <div className="lg:inline-flex  gap-8 ">
        <div className="relative w-96 hidden lg:block">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 text-sm border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Icons: Notification + Profile */}
        <div className="flex items-center gap-4">
          <IoNotificationsOutline className="text-xl text-gray-600 cursor-pointer" />
          <img
            src={Face} // Update with correct path
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-300"
          />
        </div>
      </div>
    </div>
  );
}
