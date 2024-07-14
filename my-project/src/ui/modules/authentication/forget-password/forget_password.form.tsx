import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props{
    form: FormsType;
}
export const ForgetPasswordForm = ({form}: Props) => {
    const {
        onSubmit, 
        errors,
        isLoading,
        register,
        handleSubmit } = form ;
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6 pb-5 space-y-4">
        <Input
            id = "email"
            errorMsg = "Vous avez une erreur quelque part"
            errors = {errors}
            register = {register}
            type = "email"
            placeholder = "Votre e-mail"
            isLoading = {isLoading}
        />
      
        <Button isLoding={isLoading} type="submit" fullWith>
            Envoyer
            </Button>
     </form>
    )
}