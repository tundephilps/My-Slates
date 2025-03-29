import { useState } from "react";
import Logo from "../../assets/Logo3.png";
import Frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";

export default function SetNewPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fcfeff]">
      <img src={Logo} className="absolute top-12 h-12" />
      <img src={Frame} className="absolute pb-20 z-10 h-[90vh] opacity-30" />
      <div className="bg-white shadow-lg rounded-lg p-8 z-20 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Set New Password
        </h2>
        <p className="text-xs text-gray-500 text-center mb-6">
          You can only reset your master password once, after this you MUST keep
          your master password safe.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-medium mb-1">
              Master Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
              required
            />
            <label className="block text-xs text-gray-600 mb-1">
              Must be at least 8 characters
            </label>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">
              Confirm Master Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
              required
            />
          </div>
          <Link to="/PasswordSuccess">
            <button
              type="submit"
              className="w-full bg-[#0598ce] text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              Open Email App
            </button>
          </Link>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-[#0598ce] text-sm hover:underline">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
