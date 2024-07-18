import { useAuth } from "@/context/AuthUserContext"
import { Avatar } from "@/ui/design-system/avatar/avatar"
import { Typography } from "@/ui/design-system/Typography/Typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () => {
    const { authUser } = useAuth()

    const { photoURL,displayName } = authUser;
    return(
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={displayName ? `avatar de ${displayName}` :"Photo de profile"} size="large"/>
            <div className="max-w-[160px]">
                <Typography variant="caption2" weight="medium" className="truncate">
                    {displayName ? displayName : "Bienvenue "}
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray">
                    Mon Espace
                </Typography>
            </div>
        </Link>
    )
}