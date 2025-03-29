import { collection, getDocs, query, where,  CollectionReference, WhereFilterOp, DocumentData } from "firebase/firestore";
import { db } from  "../firebase.config";;

export type WhereClause = {
  field: string;
  operator: WhereFilterOp;
  value: any;
};

export type QueryOptions = {
  max?: number;
  whereClauses?: WhereClause[];
};
export const docQr = async (collectionName: string, options?: QueryOptions) => {
  const colRef: CollectionReference<DocumentData> = collection(db, collectionName);
  const data: any[] = [];

  if (options && options.whereClauses) {
    const queryPromises = options.whereClauses.map(async (clause) => {
      const q = query(colRef, where(clause.field, clause.operator, clause.value));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        data.push({
          docId: doc.id,
          ...doc.data(),
        });
      });
    });

    await Promise.all(queryPromises);
  }

  return data.sort((a, b) => b.index - a.index);
};
