import { useRef, useState } from "react";
import { FaImages, FaUpload } from "react-icons/fa";

const SubjectInformation = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Triggers the hidden input
  };

  return (
    <div className="py-6 grid lg:grid-cols-2 grid-cols-1 gap-6 w-full">
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 text-xs ">Grade</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Select Grade</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-xs">Subject Name</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Select Subject</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-xs">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            placeholder="Tell us about the subject"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 text-xs">Assign Teachers</label>
          <select className="w-full p-2 border rounded-lg">
            <option>Ms Vee Egun</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          <div>
            <label className="block text-gray-700 text-xs">
              Registration Start Date
            </label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-gray-700 text-xs">
              Registration End Date
            </label>
            <input type="date" className="w-full p-2 border rounded-lg" />
          </div>
        </div>
      </div>

      <div className="">
        <label className="block text-black font-bold">Subject Image</label>
        <p className="text-[#667185] text-xs">
          This image will be displayed on students profile
        </p>
        <div>
          {/* Custom Add Image Button */}
          <div
            className="border inline-flex p-2 gap-2 mt-4 rounded-md cursor-pointer"
            onClick={handleButtonClick}
          >
            <FaImages /> <p className="text-xs">Add image</p>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />

          {/* Display Selected Image */}
          {selectedImage && (
            <div className="mt-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectInformation;
