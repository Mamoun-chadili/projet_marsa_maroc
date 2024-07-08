import { Typography } from "@/ui/design-system/Typography/Typography"
import { Container } from "../container/container"
import Image from "next/image"
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";


export const Footer = () => {

    const currentYear = new Date().getFullYear();

    const  footerNavigationList = footerLinks.map((colomnLinks) =>
    (
        <FooterLink key={uuidv4()} data={colomnLinks}/>
    ));
    

    return(
        <div className="bg-gray-900">
            <Container className="flex justify-between pt-16">
                <div className=" flex flex-col items-center gap-5">
                    <Typography variant="caption1" theme="white" weight="medium">
                        LE GROUPE
                    </Typography>
                  
                    <a href="https://www.marsamaroc.co.ma/fr" target="_blank">
                        <Image src="/assets/svg/marsa-maroc 1.svg" 
                        width={229} height={216} alt=""
                        />
                    </a>
                </div>
                <div className="flex gap-7"> {footerNavigationList} </div>
            </Container>
            <Container className="pt-9 pb-2 space-y-2"> 
                <hr className="text-gray"/>
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © Marsa Maroc ${currentYear}`}
                    </Typography>
                    <div className=""></div>
                </div>
            </Container>
        </div>
    );
};


interface footerLinkProps {
        data: FooterLinks;
}
const FooterLink = ({ data }: footerLinkProps ) => {
    const  linksList = data.links.map((link) =>
        (
            <div key={uuidv4()}>
                {link.type === "internal" && (
            <ActiveLink  href={link.baseUrl}>{link.label}</ActiveLink>)}
                 {link.type === "external" &&  (
            <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
            </div>
        ));

    return(
        <div className="min-w-[190px]">
            <Typography
            theme="white"
            variant="caption2"
            weight="medium"
            className="pb-5"
            >
               {data.label}
            </Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4">
               {linksList}
            </Typography>
        </div>
    );
};