import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hocks/use-toggle"
import { SubmitHandler, useForm } from "react-hook-form"
import { SaveCamion, UserProfileFormFieldsType } from "@/types/forms"
import { useEffect, useState } from "react"
import { firestoreUpdateDocument } from "@/api/firestore"
import { toast } from "react-toastify"
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage"
import { storage } from "@/config/firebaseconfig"
import { CamionView } from "./camion.view"

export const CamionContainer = () => {
    const { authUser,reloadUserData } = useAuth()
    const { value: isLoading,setValue: setLoading} = useToggle()
    // const [selectedImage, setSelectedImage] = useState<File | null>(null);
    // const [imagePreview,setImagePreview] = useState<string | ArrayBuffer | null>(null)
    // const [uploadProgress , setUploadProgess] = useState<number>(0)

    const {handleSubmit,
           control,
           formState:{ errors },
           register,
           setValue,
           setError,
    } = useForm<SaveCamion>()

    const {CIN_Chauffeur,PlaqueCamion,conteneur,description} = 
    authUser.userDocument
    useEffect(() => {  
        const fieldsToUpdate: (
        |"CIN_Chauffeur"
        |"PlaqueCamion"
        |"conteneur"
        |"description"
     
    )[] = ["CIN_Chauffeur","PlaqueCamion","conteneur","description"]

    for (const field of fieldsToUpdate) {
        setValue(field,authUser.userDocument[field])   
    }
},[])


// const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     console.log("file",file);
//     if (file) {
//         setSelectedImage(file)
//         const reader = new FileReader()
//         reader.onload = (e) => {
//             let imgDataUrl: string | ArrayBuffer | null = null
//             if (e.target) {
//                 imgDataUrl = e.target.result
//             }
//             setImagePreview(imgDataUrl)
//         }
//         reader.readAsDataURL(file)
//     }
// }

// const handleImageUpload = () => {
//     let storageRef: StorageReference;
//     let uploadTask: UploadTask;

//     if (selectedImage !== null) {
//         setLoading(true)
//         storageRef = ref(
//             storage,
//             `users-media/${authUser.uid}/avatar/avatar-${authUser.uid}`
//         )
//         uploadTask = uploadBytesResumable(storageRef,selectedImage)
//         uploadTask.on(
//             "state_changed",(snapshot)  => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 setUploadProgess(progress)
//             },
//             (error) => {
//                 setLoading(false)
//                 toast.error("une erreur inconnue est survenue");
//                 setUploadProgess(0)
                
//             },
//             () => {
//                 getDownloadURL(uploadTask.snapshot.ref).then(
//                     (downloadURL)=> {
//                         updateUserAvatar(downloadURL);
//                         setSelectedImage(null)
//                         setTimeout(()=>{
//                             setUploadProgess(0)
//                         },1000)
//                     }
//                 )
//             }
//         )
//     }
// }

// const updateUserAvatar = async ( photoURL: string) => {
//     const body = {
//         photoURL: photoURL
//     }

//      // await updateUserIdentificatioData(authUser.uid,body)
//      const { error } = await firestoreUpdateDocument(
//         "users",
//         authUser.uid,
//         body
//     )
//     if (error) {
//         setLoading(false);
//         toast.error(error.message)
//         return
//     }
//     reloadUserData()
//     setLoading(false)
// }

    const handleUpdateUserDocument = async (formData: SaveCamion) => {
        setLoading(true)
       
        
        const { error } = await firestoreUpdateDocument (
            "users",
            authUser.uid,
            formData
        )
        if (error) {
            setLoading(false)
            toast.error(error.message)
            return
        }
        toast.success("Le trafic a été enregistre avec succès")
        setLoading(false)
    }
    const onSubmit: SubmitHandler<SaveCamion> = async (formData) => {
        

        if (formData.CIN_Chauffeur && !/^[A-Z]{1,2}\d{6}$/.test(formData.CIN_Chauffeur.toString())) {
            setError("CIN_Chauffeur", {
                type: "manual",
                message: "ATTENTION! Ce CIN du chauffeur n'est pas compatible",
            });
            return;
        }

        if (
            formData.PlaqueCamion &&
            !/^\d{1,5}\s*\|\s*[A-Z]\s*\|\s*([1-9]|[1-8][0-9])$/.test(formData.PlaqueCamion.toString())
          ) {
            setError("PlaqueCamion", {
              type: "manual",
              message: "ATTENTION! Cette plaque de camion n'est pas compatible",
            });
            return;
          }

          if (
            formData.conteneur &&
            !/^[A-Z]{2}.*\d{6}$/.test(formData.conteneur.toString())
          ) {
            setError("conteneur", {
              type: "manual",
              message: "ATTENTION! Ce conteneur n'est pas compatible",
            });
            return;
          }
          
        console.log("formData",formData)
         if (
            CIN_Chauffeur !== formData.CIN_Chauffeur || 
            PlaqueCamion !== formData.PlaqueCamion ||
            conteneur !== formData.conteneur ||
            description !== formData.description ) {

            for ( const key in formData){
                if (formData.hasOwnProperty(key) && 
                formData[key as keyof SaveCamion] === undefined
                ) {
                    delete formData[key as keyof SaveCamion] 
                }
            }

            handleUpdateUserDocument(formData)
            return
    }
}

    return (
            <CamionView
            // imagePreview={imagePreview}
            // uploadProgress={uploadProgress}
            // handleImageSelect={handleImageSelect}
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