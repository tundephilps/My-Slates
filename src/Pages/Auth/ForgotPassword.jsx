import { useEffect, useState } from "react";
import Logo from "../../assets/Logo3.png";
import Frame from "../../assets/Frame.png";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase.config";


const auth=getAuth(app);



export default function ForgotPassword() {
  const [email, setEmail] = useState("");
const [mailSent,setMailSent]=useState(false);
  const [countdown,setCountDown]=useState(60);
const [intervalId,setIntervalId]=useState();
  const startCountDown=async ()=>{
    setCountDown(60)
setIntervalId(setInterval(()=>{
setCountDown((prev)=>{
 
if(prev===0){
// clearInterval(intervalId);
stopCountDown()
  return 60
}


 return ((prev||0)-1)

})
},1000))
  }
  const stopCountDown=()=>{
    setMailSent(false)
    intervalId ? clearInterval(intervalId):null;
  }
  

  useEffect(()=>{
return ()=>{
  stopCountDown();
}
  },[])



const [loading,setLoading]=useState(false);
const submit=async (e)=>{
  e.preventDefault()
  try{
    setLoading(true)
    const res=await sendPasswordResetEmail(auth,email,{
      url:'https://myslates.com',
      linkDomain:"myslates.com"
    })
    console.log(res);
    setMailSent(true);
    startCountDown();
  }
  catch(err){
alert(err.message)
  }
  finally{
    setLoading(false);
  }
}


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

        <form onSubmit={submit}>
          <label className="block text-xs font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2  outline-none"
            value={email}
            onChange={(e)=>{
              const {target:{value}}=e;
              setEmail(value);
            }}
            required
          />

          {/* <Link to="/SetNewPassword"> */}
            <button
              type="submit"
             
              disabled={mailSent||loading}
              className="w-full bg-[#0598ce] text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
            >
              {mailSent ? `Retry in ${countdown}secs`:loading ? "please wait..":"Reset Password"}
            </button>
          {/* </Link> */}
        </form>

        <div className="mt-4 text-center">
          <Link to="/Login" className="text-[#0598ce] text-sm hover:underline">
            ← Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
