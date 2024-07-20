import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFielsType } from "@/types/forms";
import { firbaseCreateUser, sendEmailToResetVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hocks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";



export const RegisterContainer = () => {

    const { 
        value: isLoading , 
        setValue: setInLoading
    } = useToggle();


    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFielsType>();

       const handleCreateUserDocument = async (collectionName: string, documentID: string, document: object ) => {
            const {error} = await firestoreCreateDocument (
                collectionName,
                documentID,
                document
            )
            if(error){
                toast.error(error.message)
                setInLoading(false);
                return
            }
            toast.success("Bienvenue sur l'application")
            setInLoading(false);
            reset();
            sendEmailToResetVerificationProcedure();
        }

     const handleCreateUserAuthentification = async ({
        email,
        password
    }: RegisterFormFielsType) => {
        const { error , data } = await firbaseCreateUser(email,password)
        if (error){
            setInLoading(false);
            toast.error(error.message)
            return;
        }
        const userDocumentData = {
            email: email,
            uid: data.uid,
            creation_date: new Date(),
        }
        handleCreateUserDocument("users",data.uid,userDocumentData)
    };

    const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
        setInLoading(true);
       
        const { password } = formData;
       
        if(password.length <= 5) {
            setError("password",{
                type: "manual",
                message:
                 "Votre mot de passe doit comporter au minimum 6 caractères"
            });

            setInLoading(false)
            return;
        }

        handleCreateUserAuthentification(formData)
    };

    return(
 
        <RegisterView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}
        />  
     
    
    );
};