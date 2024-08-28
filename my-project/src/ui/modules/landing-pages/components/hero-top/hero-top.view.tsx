import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/Typography/Typography";
import Image from "next/image";

export const HeroTopView = () => {
    return (
        <Container className="relative pt-24 pb-32 overflow-hidden space-y-6 ">
            <div className="w-full max_w-2xl space-y-20">
                <Typography variant="h1" component="h1" className="max-w-lg">
                    Enregistrer votre conteneur !
                </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-lg">
                En un simple clic vous pouvez enregistrer vos conteneurs en toute sécurité pour avoir les informations
                </Typography>
                <div className="space-x-5">
                    {/* lier la page de scanne */}
                    <Button baseUrl="/connexion/inscription">S'inscrire</Button>
                    <Button baseUrl="/information" variant="outline">En savoir plus</Button>
                </div>
            </div>

           
            <Image
                src="/assets/svg/Marsa-Maroc-conteneur1.svg"
                alt="Conteneurs chez marsa maroc"
                width={650}
                height={750}
                className="absolute top-0 right-0 z-0"
                />
                
        </Container>
    );
};