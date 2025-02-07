import { useState } from "react";
import Logo from "../../assets/Logo3.png";
import Frame from "../../assets/Frame.png";

export default function CheckMail() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fcfeff]">
      <img src={Logo} className="absolute top-12 h-12" />
      <img src={Frame} className="absolute pb-20 z-10 h-[90vh] opacity-30" />
      <div className="bg-white shadow-lg rounded-lg p-8 z-20 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Check your email
        </h2>
        <p className="text-xs text-gray-500 text-center mb-6">
          We sent a password reset link to belloabdulkareem.com
        </p>

        <button
          type="submit"
          className="w-full bg-[#0598ce] text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
        >
          Open Email App
        </button>
        <p className="text-xs pt-6 mx-auto text-center">
          Didn’t receive the email?{" "}
          <span className="text-[#0598CE]">Click to resend</span>
        </p>

        <div className="mt-4 text-center">
          <a href="/login" className="text-[#0598ce] text-sm hover:underline">
            ← Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
