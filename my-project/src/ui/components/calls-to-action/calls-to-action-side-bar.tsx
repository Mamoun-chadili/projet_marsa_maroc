import { Button } from "@/ui/design-system/button/button"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Image from "next/image"

export const CallsToActionSideBarContribution = () => {
    return(<>
        <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-secondary-600">
            <Typography 
                    variant="lead" 
                    theme="white"
                    weight="medium"
                    className="text-center"
                    >
                Utilisation rappide
            </Typography>
            <div className="flex justify-center">
                <Button
                    variant="accent"
                //lien vers utilisation
                    baseUrl="/utilisation"
                    linkType="internal"
                >
                    Démonstration
                </Button>
            </div>
            <Image
                width={183}
                height={183}
                src="assets/images/scanne3.png"
                alt="scanne"
                className="rounded absolute -bottom-3.5 transform -translate-x-1/2 left-1/2  "
            />

        </div>

        <div className="relative flex flex-col justify-center gap-5 px-8 py-12 overflow-hidden rounded pb-44 bg-gray-900">
            <Typography 
                    variant="lead" 
                    theme="white"
                    weight="medium"
                    className="text-center"
                    >
                Plus d'information
            </Typography>
            <div className="flex justify-center">
                <Button
                    variant="outline"
                //lien vers iformation
                    baseUrl="/information"
                    linkType="internal"
                >
                    Indication
                </Button>
            </div>
            <Image
                width={183}
                height={183}
                src="assets/images/info.png"
                alt="scanne"
                className="rounded absolute -bottom-3 transform -translate-x-1/2 left-1/2  "
            />

        </div>
        </>)
}