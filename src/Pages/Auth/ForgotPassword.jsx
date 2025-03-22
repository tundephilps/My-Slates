import { useState } from "react";
import Logo from "../../assets/Logo3.png";
import Frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fcfeff]">
      <img src={Logo} className="absolute top-12 h-12" />
      <img src={Frame} className="absolute pb-20 z-10 h-[90vh] opacity-30" />
      <div className="bg-white shadow-lg rounded-lg p-8 z-20 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          No worries, we will send you reset instructions
        </p>

        <form>
          <label className="block text-xs font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
            value={email}
            required
          />

          <Link to="/SetNewPassword">
            <button
              type="submit"
              className="w-full bg-[#0598ce] text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              Reset Password
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
