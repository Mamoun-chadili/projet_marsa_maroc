import { LoginFormFielsType } from "@/types/forms";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginView } from "./login.view"


import { useToggle } from "@/hocks/use-toggle";
import { firbaseSignInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


export const LoginContainer = () => {
  const router = useRouter()
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
    } = useForm<LoginFormFielsType>();

    const handleSignUser = async ({
      email,
      password
  }: LoginFormFielsType) => { 
          const {error} = await firbaseSignInUser (email,password);
          if (error){
            setInLoading(false);
            toast.error(error.message)
            return;
          }
          toast.success("Bienvenue sur l'application");
          setInLoading(false);
          reset()
          router.push("/mon-espace")
      };
     
    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
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
      handleSignUser(formData);
        
    };


    return(
       <LoginView
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