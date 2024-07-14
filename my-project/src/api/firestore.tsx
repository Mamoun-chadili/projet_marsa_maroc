import { doc,setDoc , updateDoc } from "firebase/firestore";
import { db } from "@/config/firebaseconfig";
import { FirebaseError } from "firebase/app";


export const firestoreCreateDocument = async (collectionName: string, documentID: string,data: object) => {
    try{
        const documentRef = doc(db, collectionName, documentID);

         await setDoc ( documentRef,data);
        return { data: true }
    }catch(error){

        const firebaceError = error as FirebaseError;
        ///todo
        return {
            error: {
             code:firebaceError.code,
             message: firebaceError.message,
                   },
              };
    }

};

export const firestoreUpdateDocument = async (collectionName: string, documentID: string,data: object) => {
    try{
        const documentRef = doc(db, collectionName, documentID);

         await updateDoc ( documentRef,data);
        return { data: true }
    }catch(error){

        const firebaceError = error as FirebaseError;
        ///todo
        return {
            error: {
             code:firebaceError.code,
             message: firebaceError.message,
                   },
              };
    }

};