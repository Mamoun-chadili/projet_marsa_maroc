import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,sendPasswordResetEmail, sendEmailVerification  } from "firebase/auth"
import { auth } from "@/config/firebaseconfig" ;
import { FirebaseError } from "firebase/app";


export const firbaseCreateUser = async (email: string, password: string)=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return { data: userCredential.user}
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

export const firbaseSignInUser = async (email: string, password: string)=>{
    try{
        const userCredential = await signInWithEmailAndPassword (
            auth,
            email,
            password
        );
        return { data: userCredential.user}
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

export const firbaseLogoutUser = async ()=>{
    try{
        const result = await signOut ( auth );
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

export const sendEmailToResetPassword = async (email: string) => {
    try{
         await sendPasswordResetEmail ( auth,email );
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

export const sendEmailToResetVerificationProcedure = async () => {
    if(auth.currentUser){
    try{
         await sendEmailVerification ( auth.currentUser );
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
    }else {
        return {
            error: {code:"unknow",message:"une erreur est survenue"}
        }
    }
};
export const UpdateUserIdentificationData = async (uid: string,data: any) => {
    const result = await fetch("httpps//..",{
        method:"POST",
        headers:{
            "Content-Type":"application/jason",
        },
        body: JSON.stringify({
            uid:uid,
            data:data,
        })
    })

    if (!result.ok){
        const errorResponse = await result.json();
        const firebaceError = errorResponse as FirebaseError;
        //...
        return {
            error: {
                code: firebaceError.code,
                message: firebaceError.message
            }

        }
    }
        return{data: true}
}