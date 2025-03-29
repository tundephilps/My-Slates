import Logo from "../../assets/Logo3.png";
import Key from "../../assets/Key2.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

import Lines from "../../assets/Lines.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PersonalInformation() {
  const [data,setData]=useState({
    firstname:"",
    lastname:"",
    email:"",
    phoneNumber:"",
    password:""
  })
const navigate=useNavigate()
  const continue_=async ()=>{
sessionStorage.setItem("personalInfos",JSON.stringify(data));
navigate("/PasswordSetup");
  }
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
      <Link to="/CreateAccount">
        <div className="absolute border-2 cursor-pointer inline-flex items-center p-1 text-xs rounded-md gap-2 top-16 left-3">
          <IoIosArrowBack />
          Back
        </div>
      </Link>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="MySlates Logo" className="h-8 mb-2" />
      </div>

      <div>
        <div className="text-center items-center justify-center flex flex-col">
          <img src={Key} alt="MySlates Logo" className="h-20 mb-2" />
          <h1 className="text-xl font-bold">Personal Information</h1>
          <p className="mt-2 text-[#000000] text-sm w-96 mx-auto">
            Provide essential information to proceed
          </p>
        </div>
        <div className="mt-2 w-full flex flex-col space-y-2">
          <div>
            <label className="text-xs text-black font-semibold">
              First Name
            </label>
            <div className="relative border px-2 rounded-md">
              <FaRegUser className="absolute top-3 text-1xl" />
              <input
              onChange={(e)=>{
                const {target:{value}}=e
                setData({...data,firstname:value})
              }}
                placeholder="John"
                className="px-8 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-black font-semibold">
              Last Name
            </label>
            <div className="relative border px-2 rounded-md">
              <FaRegUser className="absolute top-3 text-1xl" />
              <input

onChange={(e)=>{
  const {target:{value}}=e
  setData({...data,lastname:value})
}}
                placeholder="Doe"
                className="px-8 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-black font-semibold">
              Email Address
            </label>
            <div className="relative border px-2 rounded-md">
              <MdMailOutline className="absolute top-3 text-1xl" />
              <input

onChange={(e)=>{
  const {target:{value}}=e
  setData({...data,email:value})
}}
                placeholder="vee@gmail.com"
                className="px-8 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-black font-semibold">
              Phone Number
            </label>
            <div className="relative border px-2 rounded-md">
              <LuPhone className="absolute top-3 text-1xl" />
              <input
              onChange={(e)=>{
                const {target:{value}}=e
                setData({...data,phoneNumber:value})
              }}
                placeholder="xxx xxx xxxx"
                className="px-8 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
            </div>
          </div>
          <Link to="/PasswordSetup">
            <button onClick={continue_} className="bg-[#047aa5] text-white text-sm py-3 rounded-md font-semibold w-full">
              Enter
            </button>
          </Link>
        </div>
      </div>

      <p className="flex-end text-xs text-gray-500 max-w-xs text-center">
        {"By creating an account, you agree to MySlates' "}
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
