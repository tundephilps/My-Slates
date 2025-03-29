import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useUser=()=>{
    const navigate=useNavigate();
    const user=JSON.parse(sessionStorage.getItem("user")||"null");
    useEffect(()=>{
        if(!user){
            navigate("/Login")
        }
    },[user])
    return {user,noUser:user?true:false}
}
export default useUser;