import React, { useState } from "react";
import Logo from "../../assets/Logo3.png";
import Key from "../../assets/Key3.png";
import { IoIosArrowBack } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Lines from "../../assets/Lines.png";
import { Link } from "react-router-dom";

export default function PasswordSetup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const checkPasswordStrength = (pass) => {
    let strength = 0;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (pass.length >= 8) strength += 1;
    return strength;
  };

  const passwordStrength = checkPasswordStrength(password);

  const getStrengthColor = () => {
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-green-500";
    return "bg-gray-300";
  };

  return (
    <div className="flex flex-col relative items-center justify-between py-8 h-screen w-full text-black">
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${Lines})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Link to="/PersonalInformation">
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
          <h1 className="text-xl font-bold">Password Setup</h1>
          <p className="mt-2 text-[#000000] text-sm w-96 mx-auto">
            Set up a secure password to protect your account.
          </p>
        </div>

        <div className="mt-2 w-full flex flex-col space-y-2">
          <div>
            <label className="text-xs text-black font-semibold">Password</label>
            <div className="relative border px-2 rounded-md">
              <MdLockOutline className="absolute top-2.5 text-1xl" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="px-8 border-none outline-none text-sm py-2 rounded-md font-semibold w-full"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2.5 right-3"
              >
                {showPassword ? (
                  <FiEyeOff className="text-1xl" />
                ) : (
                  <FiEye className="text-1xl" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs text-black font-semibold">
              Confirm Password
            </label>
            <div className="relative border px-2 rounded-md">
              <MdLockOutline className="absolute top-2.5 text-1xl" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                className="px-8 border-none outline-none text-sm py-2 rounded-md font-semibold w-full"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-2.5 right-3"
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="text-1xl" />
                ) : (
                  <FiEye className="text-1xl" />
                )}
              </button>
            </div>
          </div>

          <div className="w-full mt-2 h-2 rounded-md overflow-hidden bg-gray-200">
            <div
              className={`h-full ${getStrengthColor()} transition-all`}
              style={{ width: `${(passwordStrength / 3) * 100}%` }}
            />
          </div>
          <div className="text-xs space-y-1 mt-2">
            <p className="text-gray-500">
              Weak password. Must contain at least:
            </p>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    /[A-Z]/.test(password) ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <span>At least 1 uppercase</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    /[0-9]/.test(password) ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <span>At least 1 number</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    password.length >= 8 ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <span>At least 8 characters</span>
              </div>
            </div>
          </div>
          <button className="bg-[#047aa5] text-white text-sm py-3 rounded-md font-semibold w-full">
            Enter
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
