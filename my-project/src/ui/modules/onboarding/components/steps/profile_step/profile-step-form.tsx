import { FormsType } from "@/types/forms"
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";

interface Props {
    form:FormsType
}
export const ProfileStepForm = ({form}: Props) => {
    const { register, errors,isLoading} = form;
    return(
        <form className="w-full max-w-md space-y-4">
            <Input
                label="Nom et Prénom"
                isLoading={isLoading}
                placeholder="Inscrivez votre Nom et Prénom"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Vous devez renseigner un Nom et un Prenom correct"
                id="displayName"
            />
            <Input
                label="Expertise ?"
                isLoading={isLoading}
                placeholder="Ouvrier docker / Douanier..."
                type="text"
                register={register}
                errors={errors}
                errorMsg="Vous devez renseigner votre expertise"
                id="expertise"
            />
            <Textarea
                 label="Biographie"
                 isLoading={isLoading}
                 placeholder="Présentez-vous en quelques mots...(Optionnel)"
                 rows={5}
                 register={register}
                 errors={errors}
                 errorMsg="Vous devez renseigner ce champ"
                 id="biographie"  
                 required={false}
            />
        </form>
    )
}