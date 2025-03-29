import Avatar from "../../assets/Avatar.png";
import Coin from "../../assets/Coin.png";

export default function StudentProfile() {
  return (
    <div className="w-full">
      {/* Profile Section */}
      <div className="flex flex-row items-center gap-8">
        <img
          src={Avatar} // Replace with actual avatar URL
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-2 border-blue-400"
        />
        <div>
          <h2 className="text-lg font-semibold mt-2">Vee Bona-Egun</h2>
          <p className="text-gray-500 text-sm">tahdnajikabb@gmail.com</p>
          <p className="text-gray-500 text-sm">09034562134</p>

          {/* Coins Section */}
          <div className="flex items-center mt-2 text-lg font-semibold text-gray-700">
            80{" "}
            <span className="ml-1">
              {" "}
              <img src={Coin} />{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-600 text-sm">Grade</label>
          <input
            type="text"
            value="Grade A"
            disabled
            className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm">
            How many subjects?
          </label>
          <input
            type="text"
            value="Six"
            disabled
            className="w-full p-2 mt-1 bg-gray-100 border border-gray-300 rounded-lg text-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
