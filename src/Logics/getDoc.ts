import { db} from  "../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore"

export const getSingleDoc=async (collectionName:string)=>{
const data:any=[];
const q = query(collection(db, collectionName));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  data.push({
    docId:doc.id,
    ...doc.data()
  })
});
return data;
}

export const filterDocs=async (collectionName:string,property:string,compare:string | any,value:string)=>{
const data:any=[];
const q = query(collection(db, collectionName), where(property,compare, value));
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  data.push({
    docId:doc.id,
    ...doc.data()
  })
});
return data;
}