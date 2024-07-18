import useFirebaseAuth from "@/hocks/use-firebase-auth"
import { UserDocument } from "@/types/user"
import { useContext,createContext } from "react"


const init = {
    uid: "",
    email:"",
    displayName: "",
    emailVerified: false,
    phoneNumber: "",
    photoURL: "",
    userDocument: {} as UserDocument
}

const authUserContext = createContext({
    authUser: init,
    authUserIsLoading: true,
    reloadUserData: () => {}
})
interface Props {
    children: React.ReactNode
}
export function AuthUserProvider({children}: Props){

    const auth = useFirebaseAuth()

    return (
        <authUserContext.Provider
        value={{
            authUser: auth.authUser as {
                uid: string;
                email: string;
                displayName: string;
                emailVerified: boolean;
                phoneNumber: string ;
                photoURL: string ;
                userDocument: UserDocument;
            },
            authUserIsLoading: auth.authUserIsLoading,
            reloadUserData: auth.reloadUserData
        }}
        >
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext  (authUserContext)