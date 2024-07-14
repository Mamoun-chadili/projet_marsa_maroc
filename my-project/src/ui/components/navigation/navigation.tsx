import { Typography } from "@/ui/design-system/Typography/Typography";
import { Container } from "../container/container"
import { Logo } from "@/ui/design-system/logo/logo";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";
import { useAuth } from "@/context/AuthUserContext";
import { AccountAvatarNavigationLink } from "./account-avatar-link";
interface Props {}

export const Navigation = ({}:Props) => {
    const { authUser } = useAuth()
    console.log("authUser",authUser)

    const authentificationSystem = (
        <div className="flex items-center gap-2">
                        <Button baseUrl="/connexion" size="small">Connexion</Button>
                        <Button baseUrl="/connexion/inscription" size="small" variant="secondary">Rejoindre</Button>
                        </div>
    )
    return(
        <div className="border-b-2  bg-gray-500">
            <Container className="flex items-center justify-between py-1.5 gap-7">
                <Link href="/">
                <div className="flex items-center gap-2.5">
                    <Logo size="large"/>
                   <div className="flex flex-col">
                    <div className="text-gray font-extrabold text-[15px]">
                        Vos opérations entre les mains d'un expert
                    </div>
                    <Typography variant="caption4" 
                    theme="gray" component="span">
                        Terminaux
                    </Typography>
                </div>
                    </div>
                    </Link>
                <div className="flex items-center gap-7">
                    <Typography variant="caption3" component="div" className="flex items-center gap-7">
                        <ActiveLink href="/design-system">design</ActiveLink>
                        <ActiveLink href="/utilisation">Utilisation</ActiveLink>
                        <ActiveLink href="/information">Information</ActiveLink>
                        
                    </Typography>
                    
                     {!authUser ? authentificationSystem : <AccountAvatarNavigationLink/>}   
                   
                </div>
            </Container>
        </div>
    );
}