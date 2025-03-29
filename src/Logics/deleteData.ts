import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export const deleteData = async (collectionName: string, doc_id: string) => {
    
  try {
    const washingtonRef = doc(db, collectionName, doc_id);
    // Set the "capital" field of the city 'DC'
    const deleteRef = await deleteDoc(washingtonRef);
    console.log("Document successfully deleted:", deleteRef);
    return deleteRef;
  } catch (error:any) {
    console.error("Error deleting document:", error?.message);
    throw error; // Re-throw the error to handle it at the caller level
  }
};
