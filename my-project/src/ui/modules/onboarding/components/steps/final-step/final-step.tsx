import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hocks/use-toggle"
import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { Typography } from "@/ui/design-system/Typography/Typography"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Logo } from "@/ui/design-system/logo/logo"
import { firestoreUpdateDocument } from "@/api/firestore"
import { toast } from "react-toastify"



export const FinalStep = ({isFinalStep}: BaseComponentProps) => {
    const { authUser,reloadUserData } = useAuth()
    const { value: isLoading ,toggle }= useToggle();
    
   

    const handleCloseOnboarding = async () => {
        toggle();
        const data = {
            onboardingIsCompleted: true,
        }
        const { error } = await firestoreUpdateDocument("users",authUser.uid,data)
        if (error) {
            toggle()
            toast.error(error.message)
            return
        }
        reloadUserData()
        toggle()
    }
    return( 
    <>
        <div className="relative h-screen pb-[91px]">
            <div className="h-full overflow-auto">
            <Container className="h-full">
                <div className="relative z-10 flex items-center h-full py-10">
                <div className="max-w-xl w-full mx-auto space-y-5 pb-4.5">
                    <div className="flex justify-center">
                        <Logo size="xlarge"/>
                    </div>
                        <Typography variant="h1" component="h1" className="text-center">
                        Félicitations!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray" className="text-center">                       
                        Vous avez terminé avec succès votre inscription. 
                        Nous sommes ravis de vous accueillir parmi nous et de 
                        vous compter parmi les utilisateurs de notre application.
                        Merci pour votre coopération et votre confiance. 
                        Nous espérons que notre service vous apportera entière 
                        satisfaction et facilitera vos opérations portuaires. Merci. Bienvenue à bord !
                        </Typography>
                </div>
                </div>
            </Container>
         </div>
            <OnboardingFooter
                isFinalStep={isFinalStep}
                next={handleCloseOnboarding}
                isLoading={isLoading}
        />
        </div>
    </>)
}