import { useAuth } from "@/context/AuthUserContext"
import { ProfileView } from "./profile.view"
import { useToggle } from "@/hocks/use-toggle"
import { SubmitHandler, useForm } from "react-hook-form"
import { UserProfileFormFieldsType } from "@/types/forms"
import { useEffect, useState } from "react"
import { firestoreUpdateDocument } from "@/api/firestore"
import { toast } from "react-toastify"
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage"
import { storage } from "@/config/firebaseconfig"

export const ProfileContainer = () => {
    const { authUser,reloadUserData } = useAuth()
    const { value: isLoading,setValue: setLoading} = useToggle()
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview,setImagePreview] = useState<string | ArrayBuffer | null>(null)
    const [uploadProgress , setUploadProgess] = useState<number>(0)

    const {handleSubmit,
           control,
           formState:{ errors },
           register,
           setValue,
           setError,
    } = useForm<UserProfileFormFieldsType>()

    const {displayName,expertise,biographie,linkedin,whatsApp} = 
    authUser.userDocument;
    useEffect(() => {  
        const fieldsToUpdate: (
        |"displayName"
        |"expertise"
        |"biographie"
        |"linkedin"
        |"whatsApp"
    )[] = ["displayName","expertise","biographie","linkedin","whatsApp"]

    for (const field of fieldsToUpdate) {
        setValue(field,authUser.userDocument[field])   
    }
},[])


const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log("file",file);
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
        setLoading(true)
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
                setLoading(false)
                toast.error("une erreur inconnue est survenue");
                setUploadProgess(0)
                
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(
                    (downloadURL)=> {
                        updateUserAvatar(downloadURL);
                        setSelectedImage(null)
                        setTimeout(()=>{
                            setUploadProgess(0)
                        },1000)
                    }
                )
            }
        )
    }
}

const updateUserAvatar = async ( photoURL: string) => {
    const body = {
        photoURL: photoURL
    }

     // await updateUserIdentificatioData(authUser.uid,body)
     const { error } = await firestoreUpdateDocument(
        "users",
        authUser.uid,
        body
    )
    if (error) {
        setLoading(false);
        toast.error(error.message)
        return
    }
    reloadUserData()
    setLoading(false)
}

    const handleUpdateUserDocument = async (FormData: UserProfileFormFieldsType) => {
        setLoading(true)
        
        const { error } = await firestoreUpdateDocument (
            "users",
            authUser.uid,
            FormData
        )
        if (error) {
            setLoading(false)
            toast.error(error.message)
            return
        }
        toast.success("Votre profile à été mis à jour avec succès ")
        setLoading(false)
    }
    const onSubmit: SubmitHandler<UserProfileFormFieldsType> = async (formData) => {
        
        //TODO upload avatar
        if (selectedImage) {
            handleImageUpload()
        }

        if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
            setError("linkedin",{
                type: "manual",
                message:"Cet URL ne correspend pas à un profile Linkedin",
            })
            return;
        }
       

        if (formData.whatsApp && !/^(06|05|07)\d{8}$/.test(formData.whatsApp.toString())) {
            setError("whatsApp", {
                type: "manual",
                message: "Ce numéro n'est pas correct",
            });
            return;
        }
        
        if (displayName !== formData.displayName || 
            expertise !== formData.expertise || 
            biographie !== formData.biographie ||
            linkedin !== formData.linkedin ||
            whatsApp !== formData.whatsApp
        ) {

            for ( const key in formData){
                if (formData.hasOwnProperty(key) && 
                formData[key as keyof UserProfileFormFieldsType] === undefined
                ) {
                    delete formData[key as keyof UserProfileFormFieldsType] 
                }
            }

            handleUpdateUserDocument(formData)
            return
        }
    
    }
    return (
            <ProfileView
            imagePreview={imagePreview}
            uploadProgress={uploadProgress}
            handleImageSelect={handleImageSelect}
            form={{
                errors,
                control,
                register,
                handleSubmit,
                onSubmit,
                isLoading
            }}
            />

    )
}