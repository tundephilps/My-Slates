import  { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import Logo from "../../assets/Logo.png";
import BackgroundImage from "../../assets/Rectangle.png"; // Import your background image
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
// import { GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth"; 
import Lines from "../../assets/Lines.png"; // Import your background image
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebase.config";
import { docQr } from "../../Logics/docQr";
const auth=getAuth(app);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
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
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate(); // React Router DOM hook for navigation
const [loading,setLoading]=useState(false);
const [inputs,setInputs]=useState({
  password:"",
  email:""
})
  const handleSubmit =async () => {
    try{
      if(inputs.email=="" || inputs.password=="")return console.log("data not completed",inputs)
      setLoading(true);
      const {email,password}=inputs;
      signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user::",user.uid)
      const userRes=await docQr("users",{
        max:1,
        whereClauses:[
          {
            field:"uid",
            operator:"==",
            value:user.uid
          }
        ]
      })

      console.log("result",userRes[0]);
      if(!userRes[0])return alert("user not found");
       sessionStorage.setItem("user",JSON.stringify(userRes[0]));
  if(user){
    navigate("/Dashboard")
console.log("Login successful!")
  }
    })//QFTQBUXzijSe1olJrZ8eP6PAD9D2
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      alert(errorMessage);
  
    });

//     createUserWithEmailAndPassword(auth, email, password)
//     .then(async (userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       console.log(user);
//      if((await UserIsBlocked(user))){
// window.localStorage.href='/'
//      }

//      // console.log(user)
//       localStorage.setItem("user",JSON.stringify(user));
//       ;
//       route.push("/SetupProfile")

//      //verifyUser(user);
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       setIsLoading(false);
//       console.log(error);
//       toast.error(errorMessage);
//       // ..
//     });
    }
    
    catch(err){
      console.log(err);
    }
  
  };
  return (
    <div className="flex h-screen w-full p-2">
      {/* Left Side */}

      <div className="w-1/2 hidden lg:block rounded-2xl">
        <div className="relative rounded-2xl flex h-full flex-col items-center justify-center bg-[#0F2B38] text-white overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${BackgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.5", // Adjust opacity as needed
              mixBlendMode: "overlay", // Optional: experiment with different blend modes
            }}
          />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${Lines})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.5", // Adjust opacity as needed
              //      mixBlendMode: "overlay", // Optional: experiment with different blend modes
            }}
          />

          {/* Content Container - ensure it's above the background */}
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="absolute top-2 flex items-center space-x-2">
              <img src={Logo} alt="Onboarding Logo" className="h-8" />
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
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center p-10">
        <h2 className="text-2xl font-bold mb-6">Login !</h2>

        <div className="w-80 space-y-4">
          <div>
            <label className="text-xs text-black font-semibold">
             Email
            </label>
            <div className="relative border px-2 rounded-md">
              <input
              type="email"
              onChange={(e)=>{
                const {target:{value}}=e;
                setInputs({...inputs,email:value})
              }}
                placeholder="Enter your Email"
                className="px-2 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-black font-semibold">Password</label>
            <div className="relative border px-2 rounded-md">
              <input
              onChange={(e)=>{
                const {target:{value}}=e;
                setInputs({...inputs,password:value})
              }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="px-2 border-none outline-none  text-sm py-2 rounded-md font-semibold w-full"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#047aa5] text-white py-2 rounded-md font-semibold"
          >
            {loading ? "Please wait..":"Login"}
          </button>

          <p className="text-center text-sm">
            Forgot Password?{" "}
            <Link to="/ForgotPassword" className="text-blue-500 font-semibold">
              Recover
            </Link>
          </p>

          <div className="flex items-center justify-center space-x-2">
            <div className="h-px bg-gray-300 w-20"></div>
            <span className="text-gray-500 text-sm">Or</span>
            <div className="h-px bg-gray-300 w-20"></div>
          </div>

          <Link to="/CreateAccount">
            <p className="text-center text-[#0598ce] text-sm border border-[#047aa5] p-2 rounded-md mt-4">
              Don’t have an account?{" "}
              <a href="#" className="font-semibold">
                Sign Up
              </a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
