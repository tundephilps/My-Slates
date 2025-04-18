import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import BackgroundImage from "../../assets/Rectangle.png";
import Lines from "../../assets/Lines.png";

export default function Onboarding() {
  const navigate = useNavigate();
  const slides = [
    {
      title: "Track your students' performances",
      description:
        "Get an overview of how your students are performing and motivate them to do more.",
    },
    {
      title: "Organize Your Curriculum Effortlessly ",
      description:
        "Get an overview of how your students are performing and motivate them to do more.",
    },
    {
      title: "Dynamic AI-Powered tools to boost workflow ",
      description:
        "Give feedback and create content effortlessly with our AI-powered teaching tools.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Check if user has seen onboarding
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");

    if (hasSeenOnboarding) {
      // If user has seen onboarding, redirect to login
      navigate("/login");
      return;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleSkip = () => {
    // Set flag in localStorage
    localStorage.setItem("hasSeenOnboarding", "true");
    // Navigate to login screen
    navigate("/login");
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#0F2B38] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
          mixBlendMode: "overlay",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Lines})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="absolute top-2 flex items-center space-x-2">
          <img src={Logo} alt="Onboarding Logo" className="h-8" />
        </div>

        {/* Skip button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={handleSkip}
            className="px-4 py-1 bg-blue-500 bg-opacity-30 hover:bg-opacity-50 rounded-full text-sm transition-all duration-200"
          >
            Skip
          </button>
        </div>

        <div className="text-center pt-[60vh]">
          <h1 className="text-2xl font-bold whitespace-nowrap text-center">
            {slides[index].title}
          </h1>
          <p className="mt-2 text-gray-300 text-sm w-[70%] text-center mx-auto">
            {slides[index].description}
          </p>
        </div>
        <div className="mt-6 flex space-x-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 w-6 rounded-full ${
                i === index ? "bg-blue-400" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>

        {/* Continue button */}
        {/* <div className="mt-8">
          <button
            onClick={handleSkip}
            className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-200"
          >
            Get Started
          </button>
        </div> */}
      </div>
    </div>
  );
}
