import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config";


export const updateData=async (updateCollection:string,doc_id:string,updateData={

})=>{
const washingtonRef = doc(db, updateCollection, doc_id);

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef,{
    ...updateData
});
}