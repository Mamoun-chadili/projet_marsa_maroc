import clsx from "clsx";
import Image from "next/image";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?:  "small" | "medium" | "large" | "xlarge"
    src: string;
    alt: string;
    isLoading?: boolean
}
 export const Avatar = ({ size = "medium",src,alt, isLoading }: Props) => {
    let sizeStyles : string="";

switch (size) {
    case "small":
        sizeStyles = "w-[24px] h-[24px]";
        break;
    case "medium"://default:
        sizeStyles = "w-[34px] h-[34px]";
        break;
    case "large":
        sizeStyles = "w-[50px] h-[50px]";
        break;
    case "xlarge":
        sizeStyles = "w-[110px] h-[110px]";
        break;

}


    return(
    <div className={clsx(sizeStyles,
    isLoading && "flex items-center justify-center",
                "relative bg-gray-400 rounded-full overflow-hidden ")}>
                    <div className={clsx(
                    isLoading ? "opacity-40" : "opacity-0",
                    "absolute z-10 w-full h-full bg-white animate"
                )}/>
        <Image
        fill
        src={src ? src : "/assets/images/user1.png"}
        alt={alt}
        className={clsx(
            isLoading && "blur-[2px]",
            "object-cover object-center animate bg-gray-500 py-1 px-1 rounded-full"
        )}

        />

        {isLoading && <Spinner className="realative z-20"/>} 
    </div>)
 }
    
