import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendPasswordResetEmail, sendEmailVerification  } from "firebase/auth"
import { auth } from "@/config/firebaseconfig" ;
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "@/utils/getFirebaseErrorMessage";


export const firbaseCreateUser = async (email: string, password: string) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return { data: userCredential.user}
    }catch(error){

        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "createUserWithEmailAndPassword",
            firebaseError.code
        );

        return {
            error: {
             code:firebaseError.code,
             message: errorMessage,
                   },
              };
    }

};

export const firbaseSignInUser = async (email: string, password: string)=>{
    try{
        const userCredential = await signInWithEmailAndPassword (
            auth,
            email,
            password
        );
        return { data: userCredential.user}
    }catch(error){
        const firebaseError = error as FirebaseError;

        const errorMessage = getFirebaseErrorMessage(
            "signInWithEmailAndPassword",
            firebaseError.code
        );
        return {
            error: {
             code: firebaseError.code,
             message: errorMessage ,
                   },
              };
    }

};

export const firbaseLogoutUser = async ()=>{
    try{
        const result = await signOut ( auth );
        return { data: true }
    }catch(error){

        const firebaseError = error as FirebaseError;
        const errorMessage = getFirebaseErrorMessage(
            "signOut",
            firebaseError.code
        );
        return {
            error: {
             code:firebaseError.code,
             message: errorMessage,
                   },
              };
    }

};

export const sendEmailToResetPassword = async (email: string) => {
    try{
         await sendPasswordResetEmail ( auth,email );
        return { data: true }
    }catch(error){

        const firebaseError = error as FirebaseError;
        const errorMessage = getFirebaseErrorMessage(
            "sendPasswordResetEmail",
            firebaseError.code
        );
        return {
            error: {
             code:firebaseError.code,
             message: errorMessage,
                   },
              };
    }

};

export const sendEmailToResetVerificationProcedure = async () => {
    if(auth.currentUser){
    try{
         await sendEmailVerification ( auth.currentUser );
        return { data: true }
    }catch(error){

        const firebaseError = error as FirebaseError;
        const errorMessage = getFirebaseErrorMessage(
            "sendEmailVerification",
            firebaseError.code
        );
        return {
            error: {
             code:firebaseError.code,
             message: errorMessage,
                   },
              };
         }
    }else {
        return {
            error: {code:"unknow",message:"une erreur est survenue"}
        }
    }};