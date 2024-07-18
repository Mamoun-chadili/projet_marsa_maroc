import { AppLinks } from "@/types/app-links";
import { RiGoogleFill, RiLinkedinFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal",
    },
    {
        label: "Utilisation",
        baseUrl: "/utilisation",
        type: "internal",
    },
    {
        label: "Information",
        baseUrl: "/information",
        type: "internal",
    },
    {
        label: "Marsa Maroc",
        baseUrl: "https://www.marsamaroc.co.ma/fr",
        type: "external",
    },
];
const footerUserLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal",
    },
];

const footerInformationLinks: AppLinks[] = [
    {
        label: "Actualités",
        baseUrl: "https://www.marsamaroc.co.ma/fr/actualites",
        type: "external",
    },
    {
        label: "Confidentialité",
        baseUrl: "https://www.marsamaroc.co.ma/fr/certifications",
        type: "external",
    },
    {
        label: "À propos",
        baseUrl: "https://www.marsamaroc.co.ma/fr/services",
        type: "external",
    },
    {
        label: "Contact",
        baseUrl: "https://www.marsamaroc.co.ma/fr/form/contact",
        type: "external",
    },
];
export const footerNetworkLinks: AppLinks[] = [
    {
        label: "Linkedin",
        baseUrl: "https://fr.linkedin.com/company/marsa-maroc",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Site web",
        baseUrl: "https://www.marsamaroc.co.ma/fr",
        type: "external",
        icon: RiGoogleFill,
    },
    
];

export const footerLinks = [
    {
        label:"Application",
        links: footerApplicationLinks,
    },
    {
        label:"Utilisateur",
        links: footerUserLinks,
    },
    {
        label:"Information",
        links: footerInformationLinks,
    },
    {
        label:"Réseaux",
        links: footerNetworkLinks,
    },
]