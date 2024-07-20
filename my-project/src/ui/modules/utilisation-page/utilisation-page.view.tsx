import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Image from "next/image"

export const UtilisationView = () => {
    return (
       

        <Container className="relative pt-20 pb-52 overflow-hidden">
            <div className="w-full max_w-2xl space-y-10 ">
            <Typography variant="h2" component="h1">           
                Utilisation du Bouton "Enregistrer Camion"
            </Typography>

                <Typography variant="caption1" theme="gray" component="span" className="max-w-lg">
                La page "Mon compte" permet aux utilisateurs d'enregistrer des informations cruciales concernant les camions entrant au port. En bas de cette page, vous trouverez un bouton intitulé "Enregistrer camion". Ce bouton est conçu pour permettre aux utilisateurs d'enregistrer les informations
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">CIN du Chauffeur </div> 
                </Typography>
        

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">Plaque de Matriculation du Camion </div> 
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">Numéro du Conteneur </div>
                </Typography>
                <Typography variant="h4" theme="gray" component="p" className="max-w-lg">
                    Instructions pour l'inscription
                </Typography>
                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-primary-600">1. Accédez à votre compte</div> 
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-primary-600">2. Cliquez sur le bouton "Enregistrer Camion"</div> 
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-primary-600">3. Saisissez les Informations Requises</div>
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-primary-600">4. Soumettez le Formulaire</div>
                </Typography>
                
                
            </div>
            <Image
                src="/assets/images/camion4.png"
                alt="Controle du camion"
                width={740}
                height={100}
                className="absolute top-0 right-0 z-0 pt-56"
                />
                </Container>
    )
}