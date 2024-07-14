import { Button } from "@/ui/design-system/button/button"
import { footerNetworkLinks } from "./app-links"
import { v4 as uuidv4 } from 'uuid'; 
import clsx from "clsx";
import { RiLinkedinFill } from "react-icons/ri";

interface Props {
    theme?: "gary"|"accent"|"secondary";
    className?: string ;
}
export const SocilaNetworksBouttons = ({className,theme = "accent"}: Props) => {

    const icoList = footerNetworkLinks.map((socialNetwork) => (
        <Button
        key={uuidv4()}
        variant="ico"
        iconTheme="gray"
        icon={{ icon: socialNetwork.icon 
            ? socialNetwork.icon 
            : RiLinkedinFill
        }}
           baseUrl={socialNetwork.baseUrl} 
           linkType={socialNetwork.type}
        />
    ));
    return(
        <div className={clsx(className,"flex items-center gap-2.5")}>{icoList}</div>
    )
};