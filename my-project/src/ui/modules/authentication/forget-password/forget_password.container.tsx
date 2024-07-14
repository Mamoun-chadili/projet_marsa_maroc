
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPasswordView } from "./forget_password.view"
import { ForgetPasswordFormFielsType } from "@/types/forms";
import { useToggle } from "@/hocks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgetPasswordContainer = () => {
    const router = useRouter()
    const { 
        value: isLoading , 
        setValue: setInLoading
    } = useToggle();


    const {
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm<ForgetPasswordFormFielsType>();

    const handleResetPassword = async ({email}: ForgetPasswordFormFielsType) =>{
        const { error } = await sendEmailToResetPassword(email)
        if(error){
            setInLoading(false)
            toast.error(error.message)
            return
        }
        toast.success(`Un e-mail a été expdié à l'adresse ${email} `)
        setInLoading(false)
        reset()
        router.push("/connexion")

    }
     
    const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
        setInLoading(true);
        handleResetPassword(formData)
    };
    
    return(
       <ForgetPasswordView
       form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
    }}
       />
    )
}