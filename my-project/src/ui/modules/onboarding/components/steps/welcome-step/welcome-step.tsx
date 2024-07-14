import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboarding-tabs"


export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep,
    stepsList,
    getCurrentStep,
}: BaseComponentProps) => {
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
                        Bienvenue sur notre application révolutionnaire!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                        Nous sommes ravis de vous accueillir dans notre communauté d'utilisateurs passionnés par l'innovation et l'efficacité. Avec notre application, vous pouvez désormais scanner les conteneurs au port de manière rapide et efficace, simplifiant ainsi vos opérations quotidiennes.
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="w-full">
                        <Image
                            src="/assets/images/scanne4.png"
                            alt="Bienvenue"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </Container>
         </div>
        <OnboardingFooter
            next={next}
            isFirstStep={isFirstStep}
            isFinalStep={isFinalStep}
        />
    </div>
    )
} 