import { auth, db } from "@/config/firebaseconfig";
import { UserDocument, UserInterface } from "@/types/user";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useFirebaseAuth () {
    const [authUser , setAuthUser] = useState<UserInterface | null>(null)
    const [authUserIsLoading , setAuthIsLoading] = useState<boolean>(true)

    // reload authuser function
    const reloadUserData = () => {
        if (auth.currentUser) {
            auth.currentUser.reload().then(() => {
                authStateChanged(auth.currentUser)
            })
        }
    }

    const formatAuthUser = (user: UserInterface)=>({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
    })

    const getUserDocument = async (user: UserInterface) => {
        if(auth.currentUser){
            const documentRef = doc (db,"users", auth.currentUser.uid)
            const compactUser = user;

            onSnapshot (documentRef, async (doc) => {
                 if(doc.exists()){
                    compactUser.userDocument = doc.data() as UserDocument
                 }
                 setAuthUser((prevAuthUser) => (
                    {
                        ...prevAuthUser,
                        ...compactUser,
                    }
                 ))
                 setAuthIsLoading(false)
            })
        }
        //..
    }

    const authStateChanged = async ( authState: UserInterface | User | null) =>{
        if(!authState){
            setAuthUser(null)
            setAuthIsLoading(false) 
            return
        }
        setAuthIsLoading(true)
        const formattedUser = formatAuthUser (authState)
        await getUserDocument(formattedUser)

    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, authStateChanged)
          return () => unsubscribe()
    },[])


    return {
        authUser,
        authUserIsLoading,
        reloadUserData
    }
}