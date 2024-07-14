import { useAuth } from "@/context/AuthUserContext"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Image from "next/image"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    const { authUser } = useAuth()

    const { displayName } = authUser;
    return(
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Image
                src="/assets/images/user1.png"
                alt="avatar utilisateur"
                width={50}
                height={50} 
            />
            <div className="max-w-[160px]">
                <Typography variant="caption2" weight="medium" className="truncate">
                    {displayName ? displayName : "Bienvenue"}
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray">
                    Mon compte
                </Typography>
            </div>
        </Link>
    )
}