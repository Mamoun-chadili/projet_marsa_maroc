import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Image from "next/image"

export const InformationView = () => {
    return (
        <Container className="relative pt-20 pb-52 overflow-hidden">
            <div className="w-full max_w-2xl space-y-10 ">
            <Typography variant="h2" component="h1" >
            Description de l'application : Enregistrement des Informations
            </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-lg">
                Notre application a pour objectif de développer un système permettant 
                d'enregistrer de manière efficace et sécurisée les informations 
                des camions entrant au port. Ce système facilitera la gestion et 
                le suivi des véhicules, améliorant ainsi la logistique et la 
                sécurité.
                </Typography>
                <Typography variant="h4" theme="gray" component="p" className="max-w-lg text-secondary-400">
                Informations à enregistrer
                </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-lg">
                Les utilisateurs auront la possibilité d'enregistrer les informations 
                suivantes pour chaque camion :
                </Typography>
                
                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">CIN du Chauffeur :</div> 
                Le numéro d'identité nationale du chauffeur, permettant une identification rapide et précise.
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">Plaque de Matriculation du Camion :</div> 
                La plaque d'immatriculation du camion, essentielle pour le suivi et l'enregistrement des mouvements des véhicules.
                </Typography>

                <Typography variant="caption1" theme="gray" component="p" className="max-w-lg">
                <div className="text-secondary-600">Numéro du Conteneur :</div>
                Le numéro unique du conteneur transporté par le camion, facilitant ainsi la gestion des marchandises.
                </Typography>
                
            </div>
            <Image
                src="/assets/images/info3.png"
                alt="Controle du camion"
                width={650}
                height={800}
                className="absolute top-0 right-0 z-0 pt-52"
            />
        </Container>
    )
}