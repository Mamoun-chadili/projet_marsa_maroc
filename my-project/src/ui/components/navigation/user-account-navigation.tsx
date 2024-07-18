import { firbaseLogoutUser } from "@/api/authentication";
import { Box } from "@/ui/design-system/box/box"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/Typography/Typography";
import { toast } from "react-toastify";
import { ActiveLink } from "./active-link";

export const UserAccountNavigation = () => {
    const handelLogOutUser = async () => {
        const { error } = await firbaseLogoutUser();
        if (error){
            toast.error(error.message)
            return;
        }
        toast.success("Vous avez été déconnecter");
    };
    return(
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium" className="flex items-center justify-center">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
            </div>
            <Button action={handelLogOutUser} variant="accent"  >
                Déconnexion
            </Button>
        </Box>
    )
}