import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Typography } from "@/ui/design-system/Typography/Typography"
import { OnboardingTabs } from "../../tabs/onboarding-tabs"
import { Container } from "@/ui/components/container/container"
import { ProfileStepForm } from "./profile-step-form"
import { SubmitHandler, useForm } from "react-hook-form"
import { OnboardingProfileFormFieldsType } from "@/types/forms"
import { useToggle } from "@/hocks/use-toggle"
import { useAuth } from "@/context/AuthUserContext"
import { firestoreUpdateDocument } from "@/api/firestore"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { UpdateUserIdentificationData } from "@/api/authentication"

export const ProfileStep = ({
        prev,
        next,
        isFirstStep,
        isFinalStep,
        stepsList,
        getCurrentStep,
}: BaseComponentProps) => {
    const { authUser } = useAuth()

    const { value: isLoading, setValue: setLoading}=useToggle()
    const {
        handleSubmit,
        control,
        formState: { errors },
        register,
        reset,
        setValue,
        } = useForm<OnboardingProfileFormFieldsType>()

        const { displayName, expertise, biographie } = authUser.userDocument

        //display value is exist....
        useEffect(() => {

            const fieldToUpdate: ("displayName"|"expertise"|"biographie")[]=[
                "displayName",
                "expertise",
                "biographie",
            ]
            for (const field of fieldToUpdate){
                setValue(field,authUser.userDocument[field])
            }
        },[])

        const handleUpdateUserDocument = async (
            FormData: OnboardingProfileFormFieldsType
        ) => {
            const { error } = await firestoreUpdateDocument(
                "users",
                authUser.uid,
                FormData,
            )
            if ( error ) {
                setLoading(false)
                toast.error(error.message)
                return
            }
            setLoading(false)
            reset()
            next()
        }

        const onSubmit:  SubmitHandler<OnboardingProfileFormFieldsType> = async (
            FormData
        ) => {
            setLoading(true)

            if (displayName !== FormData.displayName || 
                expertise !== FormData.expertise || 
                biographie !== FormData.biographie )
            {
                if (displayName !== FormData.displayName || 
                    authUser.displayName !==FormData.displayName
                 ) {
                    const data = {
                        displayName: FormData.displayName
                    }

                    const { error } = await UpdateUserIdentificationData(
                        authUser.uid,
                        data
                    )
                        if (error) {
                            setLoading(false)
                            toast.error(error.message)
                            return
                        }
                }

                handleUpdateUserDocument(FormData)               
            }
            setLoading(false)
            next()
         }


    return (
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
                        Presentez-vous
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">                       
                        Pour améliorer notre service et mieux répondre à vos besoins,
                        nous vous invitons à vous présenter en quelques mots.
                        Merci de prendre quelques instants pour partager 
                        ces informations avec nous. Cela nous aidera à personnaliser 
                        votre expérience et à vous offrir le meilleur service possible. 
                        Veuillez nous fournir les informations suivantes :
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="flex justify-end w-full">
                        <ProfileStepForm 
                            form={
                                {
                                    errors,
                                    control,
                                    register,
                                    handleSubmit,
                                    onSubmit,
                                    isLoading,
                                }
                            }
                        />
                    </div>
                </div>
            </Container>
         </div>
            <OnboardingFooter
                prev={prev}
                next={handleSubmit(onSubmit)}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
                isLoading={isLoading}
        />
        </div>
)
} 