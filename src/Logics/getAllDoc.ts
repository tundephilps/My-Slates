import { collection, getDocs, query, where, limit, CollectionReference, Query, WhereFilterOp, DocumentData, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";

export const getAllDoc = async (
  collectionName: string,
  max?: number,
  whereField?: string,
  whereOperator?: WhereFilterOp,
  whereValue?: any
) => {
  const colRef: CollectionReference<DocumentData> = collection(db, collectionName);
  let q: Query<DocumentData> = colRef; // Initialize q with the collection reference

  // If whereField, whereOperator, and whereValue are provided, add the where clause to the collection reference
  let hasWhere=false;
  if (whereField && whereOperator && whereValue) {
    q = query(colRef,limit(max ? max:100),where(whereField, whereOperator, whereValue));
    hasWhere=true;
  }

  // If max is provided, add the limit to the query
  if (!hasWhere) {
  
  if (max) {
    q = query(q,orderBy("index", "desc"),limit(max));
  } else {
    q = query(q,orderBy("index", "desc"),limit(100)); // Set a default limit if max is not provided
  }

  }

  const querySnapshot = await getDocs(q);
  const data: any[] = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      docId: doc.id,
    });
  });

  if(hasWhere){
    return data.sort((a:any,b:any)=>b.index - a.index);
  }


  return data;
};
