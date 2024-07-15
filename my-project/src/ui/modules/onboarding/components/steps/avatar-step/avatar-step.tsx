import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hocks/use-toggle"
import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { OnboardingTabs } from "../../tabs/onboarding-tabs"
import { Typography } from "@/ui/design-system/Typography/Typography"
import { UploadAvatar } from "@/ui/components/upload-avatar/upload-avatar"
import { useState } from "react"
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage"
import { storage } from "@/config/firebaseconfig"
import { toast } from "react-toastify"

export const AvatarStep = ({
    prev,
    next,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => { 

    const { authUser } = useAuth()
   

    const { value: isLoading, toggle} = useToggle()
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview,setImagePreview] = useState<string | ArrayBuffer | null>(null)

    const [uploadprogress , setUploadProgess] = useState<number>(0)
    console.log("uploadprogress::",uploadprogress)

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log("file",file)
        if (file) {
            setSelectedImage(file)
            const reader = new FileReader()
            reader.onload = (e) => {
                let imgDataUrl: string | ArrayBuffer | null = null
                if (e.target) {
                    imgDataUrl = e.target.result
                }
                setImagePreview(imgDataUrl)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleImageUpload = () => {
        let storageRef: StorageReference;
        let uploadTask: UploadTask;

        if (selectedImage !== null) {
            toggle()
            storageRef = ref(
                storage,
                `users-media/${authUser.uid}/avatar/avatar-${authUser.uid}`
            )
            uploadTask = uploadBytesResumable(storageRef,selectedImage)
            uploadTask.on(
                "state_changed",(snapshot)  => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    setUploadProgess(progress)
                },
                (error) => {
                    console.log('error',error)
                    toggle()
                    toast.error("une erreur inconnue est survenue");
                    
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL)=> {
                            console.log("::downloadURL::",downloadURL)
                        }
                    )
                }
            )
        }
    }
    return(
        <div className="relative h-screen pb-[91px]">
        <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12 gap-5">
            <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                <div className="w-full space-y-5 pb-4.5">
                    <OnboardingTabs
                        tabs={stepsList}
                        getCurrentStep={getCurrentStep}
                    />
                    <Typography variant="h1" component="h1">
                    Dernière étape !
                    </Typography>
                    <Typography variant="body-base" component="p" theme="gray">                       
                    Pour compléter votre profil et améliorer votre expérience utilisateur, 
                    nous vous invitons à sélectionner une image de votre choix. 
                    Cette photo de profil nous aidera à personnaliser nos interactions 
                    avec vous et à rendre notre application plus conviviale.
                    Merci de prendre un moment pour effectuer cette mise à jour. 
                    Nous vous remercions pour votre coopération et votre confiance !
                    </Typography>
                </div>
            </div>
            <div className="flex items-center h-full col-span-6">
                <div className="flex justify-center w-full">
                   <UploadAvatar 
                   handleImageSelect={handleImageSelect}
                   imagePreview={imagePreview}
                   />
                </div>
            </div>
        </Container>
     </div>
        <OnboardingFooter
            prev={prev}
            next={handleImageUpload}
            isFinalStep={isFinalStep}
            isLoading={isLoading}
    />
    </div>
    )
    
}