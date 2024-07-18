import { FormsType } from "@/types/forms";
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";
import { Textarea } from "@/ui/design-system/forms/textarea";
import { Typography } from "@/ui/design-system/Typography/Typography";


interface Props {
    imagePreview: string | ArrayBuffer | null;
    uploadProgress: number;
    handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    form: FormsType;
}
export const ProfileForm = ({
    form,
    imagePreview,
    uploadProgress,
    handleImageSelect
}:Props) => {

    const { register , errors,isLoading,onSubmit,handleSubmit}=form

    return(<>
        <form onSubmit={handleSubmit (onSubmit)} className="w-full space-y-4">

        <div className="flex items-center justify-between py-5">
           <div> 
                <UploadAvatar
                 handleImageSelect={handleImageSelect}
                 imagePreview={imagePreview}
                 uploadProgress={uploadProgress}
                 isLoading={isLoading}
                 variant="outline"
                /> 
           </div> 
           <div className="flex items-end ">
                <Typography
                    variant="caption3"
                    component="div"
                    theme="gray"
                    className="mb-3"
                >
                    PORTS ET TERMINAUX
                </Typography>
           </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 space-y-4">
                <Input
                    label="Nom d'utilisateur"
                    isLoading={isLoading}
                    placeholder="MarsaMarocUser"
                    type="text"
                    register={register}
                    errors={errors}
                    errorMsg="Vous devez renseigner un Nom et un Prenom"
                    id="displayName"
                    />
                <Input
                        label="Expertise"
                        isLoading={isLoading}
                        placeholder="Douanier/Docker..."
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Vous devez renseigner votre Expertise"
                        id="expertise"
                    />
            </div>
            <div className="col-span-6 space-y-4">
            <Input
                        label="Linkedine"
                        isLoading={isLoading}
                        placeholder="Linkedine.com/Marsa-Maroc ...(Optionnel)"
                        type="url"
                        register={register}
                        errors={errors}
                        errorMsg="Vous devez renseigner votre profile Linkedine"
                        id="linkedin"
                        required={false}
                    />
                    <Input
                        label="Numero de téléphone"
                        isLoading={isLoading}
                        placeholder="+212.....(Optionnel)"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Vous devez renseigner votre numero de téléphone "
                        id="whatsApp"
                        required={false}
                    />
            </div>
        </div>

        <Textarea
             label="Biographie"
             rows={15}
             isLoading={isLoading}
             placeholder="Indiquez votre biographie ...(Optionnel)"
             register={register}
             errors={errors}
             id="biographie"
             required={false}
        />

            <div className="flex justify-between">
                <Button 
                    isLoding={isLoading}
                    type="submit"   
                    >
                    Scanner ICI !
                </Button>
                <Button 
                // ici le lien de scanne 
                    type="button"   
                    >
                    enregistrer
                </Button>
            </div>
        </form>
</>                    
    )
}