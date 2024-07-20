import { FormsType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import Image from "next/image";

interface Props{
    form: FormsType;
}

export const CamionForm = ({ form }: Props) => {
    const {
            onSubmit, 
            errors,
            isLoading,
            register,
            handleSubmit } = form ;
        return (
            <div className=" gap-6 pb-20">
                <div className="relative w-full h-[400px] ">
                    <Image
                        fill
                        src="/assets/images/scanne5.png"
                        alt="Enregistrement des information"
                        className="object-scale-down"
                        
                        />
                </div>
    
         <form onSubmit={handleSubmit(onSubmit)} className="pt-3 pb-5 space-y-4 px-96 py-96 ">
            
            <Input
                id = "CIN"
                errorMsg = "Vous avez une erreur quelque part"
                errors = {errors}
                register = {register}
                type = "text"
                placeholder = "CIN du chauffeur"
                isLoading = {isLoading}
            />
            <Input
                id = "PlaqueCamion"
                errorMsg = "Vous avez une erreur quelque part"
                errors = {errors}
                register = {register}
                type = "text"
                placeholder = "Plaque du Camion "
                isLoading = {isLoading}
            />
            <Input
                id = "conteneur"
                errorMsg = "Vous avez une erreur quelque part"
                errors = {errors}
                register = {register}
                type = "text"
                placeholder = "Matricule Conteneur"
                isLoading = {isLoading}
            />
            <Textarea
                id = "description"
                rows={6}
                errorMsg = "Vous avez une erreur quelque part"
                errors = {errors}
                register = {register}
                placeholder = "Reclamation ...(Optinnel)"
                isLoading = {isLoading}
                required={false}
            />
            <Button isLoding={isLoading} type="submit" fullWith>
                Soumettre
                </Button>
         </form>
                </div>
      );
};