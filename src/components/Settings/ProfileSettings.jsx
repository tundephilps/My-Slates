import React, { useState } from "react";
import { FaCamera, FaCheck, FaCheckCircle } from "react-icons/fa";
import Avatar from "../../assets/Avatar.png";

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(Avatar); // Replace with a default image path

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "Vee",
    lastName: "Bona-Egun",
    email: "tahdnajikabb@gmail.com",
    phone: "09034562134",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Profile Picture */}
      <div className="flex items-center space-x-12 py-8 ">
        {/* Text Section */}
        <div>
          <h3 className="text-lg font-semibold">Profile Picture</h3>
          <p className="text-gray-500 text-xs">
            This image will be displayed on teacher’s profile
          </p>

          {/* Upload Button */}
          <label className="mt-2 inline-flex items-center px-3 py-1 border rounded-md text-sm font-medium text-gray-700 cursor-pointer">
            <FaCamera className="mr-2 text-gray-500" />
            Change
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-[#0598ce] shadow-md object-cover"
          />
          <FaCheck className="absolute bottom-2 right-2 text-white bg-[#0598ce] rounded-full p-1 text-xl" />
        </div>
      </div>
      <hr className="pb-8" />

      {/* Form */}
      <div className=" flex justify-between pb-12">
        <div className="">
          <h3 className="text-lg font-semibold">Teacher Information</h3>
          <p className="text-gray-500 text-sm mb-4">Find your details here.</p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 w-2/3">
          <div>
            <label className="text-sm text-gray-600">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm text-gray-600">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500 "
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500 "
            />
          </div>
          <div />
          <button className="mt-4 w-full bg-blue-200 text-white font-semibold py-2 rounded-md items-end">
            Save Changes
          </button>
        </div>

        {/* Save Button */}
      </div>
    </div>
  );
};

export default ProfileSettings;
