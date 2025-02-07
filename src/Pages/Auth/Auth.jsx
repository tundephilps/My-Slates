import Logo from "../../assets/Logo2.png";
import Lines from "../../assets/Lines.png";

export default function Auth() {
  return (
    <div className="flex flex-col relative items-center justify-between py-12 h-screen w-full  text-black">
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
      <div className="flex flex-col items-center">
        <img src={Logo} alt="MySlates Logo" className="h-36 mb-2" />
      </div>

      <div>
        <div className="text-center items-center justify-center flex flex-col">
          <h1 className="text-xl font-bold">Welcome to MySlates</h1>
          <p className="mt-2 text-[#000000] text-sm w-[90%] mx-auto">
            Create your account to kickstart your journey in a few easy steps
          </p>
        </div>
        <div className="mt-6 w-full flex flex-col space-y-4">
          <button className="bg-[#0598ce] text-white text-sm py-3 rounded-md font-semibold w-full">
            Sign Up with School Code
          </button>
          <button className="bg-[#047aa5] text-white text-sm py-3 rounded-md font-semibold w-full">
            Sign Up with Email
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
