import Logo from "../../assets/Logo3.png";
import Key from "../../assets/Key.png";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Lines from "../../assets/Lines.png";

export default function Register1() {
  return (
    <div className="flex flex-col relative items-center justify-between py-8 h-screen w-full  text-black">
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${Lines})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  opacity: "0.5", // Adjust opacity as needed
          //   mixBlendMode: "overlay", // Optional: experiment with different blend modes
        }}
      />

      <div className="absolute border-2 cursor-pointer inline-flex items-center p-1 text-xs rounded-md gap-2 top-16 left-3">
        <IoIosArrowBack />
        Back
      </div>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="MySlates Logo" className="h-10 mb-2" />
      </div>

      <div>
        <div className="text-center items-center justify-center flex flex-col">
          <img src={Key} alt="MySlates Logo" className="h-20 mb-2" />
          <h1 className="text-xl font-bold">School Access Setup</h1>
          <p className="mt-2 text-[#000000] text-sm w-[90%] mx-auto">
            Enter the access passcode given to you by your school management
          </p>
        </div>
        <div className="mt-6 w-full flex flex-col space-y-4">
          <div>
            <label className="text-xs text-black font-semibold">
              Enter School Passcode
            </label>
            <div className="relative border px-2">
              <CiSearch className="absolute top-3 text-2xl" />
              <input
                placeholder="e.g VIBE2034"
                className="px-8 border-none outline-none  text-sm py-3 rounded-md font-semibold w-full"
              />
            </div>
          </div>

          <button className="bg-[#047aa5] text-white text-sm py-3 rounded-md font-semibold w-full">
            Enter
          </button>
          <div className="mt-4 flex items-center w-full">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <button className="py-2  border-[#047aa5] rounded-md text-blue-500 font-semibold border">
            Log In
          </button>
        </div>
      </div>

      <p className="flex-end text-xs text-gray-500 max-w-xs text-center">
        By creating an account, you agree to MySlates'{" "}
        <a href="#" className="text-blue-500 underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
