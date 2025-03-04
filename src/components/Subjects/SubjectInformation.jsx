import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const SubjectInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="py-6 grid grid-cols-2 gap-6 w-full">
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Grade</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Select Grade</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Subject Name</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Select Subject</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            placeholder="Tell us about the subject"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Assign Teachers</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Ms Vee Egun</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-gray-700">
              Registration Start Date
            </label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700">Registration End Date</label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      </div>

      <div className="">
        <label className="block text-black font-bold">Subject Image</label>
        <p className="text-[#667185]">
          This image will be displayed on students profile
        </p>
        <div className="border mt-6 p-4 rounded-lg flex flex-col items-center">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Subject"
              className="w-32 h-32 object-cover rounded-lg"
            />
          ) : (
            <FaUpload className="text-gray-500 text-3xl" />
          )}
          <input type="file" className="mt-2" onChange={handleImageUpload} />
        </div>
      </div>
    </div>
  );
};

export default SubjectInformation;
