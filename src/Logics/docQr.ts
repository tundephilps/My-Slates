import { collection, getDocs, query, where,limit, CollectionReference, Query, WhereFilterOp, DocumentData } from "firebase/firestore";
import {db} from '../firebase.config'
export type WhereClause = {
  field: string;
  operator: WhereFilterOp;
  value: any;
};

export type QueryOptions = {
  max?: number;
  whereClauses?: WhereClause[];
};
export const docQr = async (
  collectionName: string,
  options?: QueryOptions
) => {
  const colRef: CollectionReference<DocumentData> = collection(db, collectionName);
  let q: Query<DocumentData> = colRef;
  if (options && options.whereClauses) {
    options.whereClauses.forEach((clause) => {
      q = query(q, where(clause.field, clause.operator, clause.value));
    });
  }

  // Order the documents by the index field (assuming "index" is the field name)
  //q = query(q, orderBy("index"); 

  if (options && options.max) {
    q = query(q, limit(options.max));
  } else {
    q = query(q, limit(100));
  }

  const querySnapshot = await getDocs(q);
  const data: any[] = [];
  
  querySnapshot.forEach((doc) => {
    data.push({
      docId: doc.id,
      ...doc.data(),
    });
  });
  
  return data.sort((a,b)=>b.index - a.index);
};
