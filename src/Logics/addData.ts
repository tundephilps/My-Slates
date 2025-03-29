
import {addDoc} from "firebase/firestore";


export async function AddData(collection:any,data:any){
  
if(typeof data!='object')return console.error("cannot add data that is not object")

//console.log(collection,data);
  console.log("add data to firebase request sent...");



   const addRef=await addDoc(collection,{...data});
   console.log("data added ",addRef.id);
   return addRef.id;
}