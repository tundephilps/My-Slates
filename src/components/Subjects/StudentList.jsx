import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Face from "../../assets/Avatar.png";

const users = [
  {
    id: 1,
    name: "Vee Bona-Egun",
    email: "vee@myschool.com",
    phone: "09045376942",
    avatar: Face, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Vee Bona-Egun",
    email: "vee@myschool.com",
    phone: "09045376942",
    avatar: Face, // Replace with actual image URL
  },
];

const UserCard = ({ user }) => (
  <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
    <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full" />
    <h3 className="mt-2 text-lg font-semibold">{user.name}</h3>
    <p className="flex items-center gap-2 text-gray-600">
      <FaEnvelope className="text-blue-400" /> {user.email}
    </p>
    <p className="flex items-center gap-2 text-gray-600">
      <FaPhone className="text-blue-400" /> {user.phone}
    </p>
  </div>
);

const StudentList = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-4 border rounded-lg p-2 flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
