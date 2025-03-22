import { useState } from "react";
import Logo from "../../assets/Logo3.png";
import Frame from "../../assets/Frame.png";

import Cele from "../../assets/cele.png";
import { Link } from "react-router-dom";

export default function PasswordSuccess() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fcfeff]">
      <img src={Logo} className="absolute top-12 h-12" />
      <img src={Frame} className="absolute pb-20 z-10 h-[90vh] opacity-30" />
      <div className="bg-white shadow-lg rounded-lg p-8 z-20 w-full max-w-sm">
        <img src={Cele} className="h-20 mx-auto" />
        <h2 className="text-2xl font-semibold text-center mb-2">
          Password Reset
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Your password has been successfully reset. Click below to log in
          magically.
        </p>
        <Link to="/Login">
          <button
            type="submit"
            className="w-full bg-[#0598ce] text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
