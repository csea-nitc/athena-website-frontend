import { Image, Socials } from "@/types/backend";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const getImageUrl = (image: Image) => {
    return `${backendUrl}${image.url}`;
}

export const getSocials = (socials: Socials) => {
    if (!socials)
        return undefined;

    else {
        const email = socials.email || undefined;
        const linkedin = socials.linkedin || undefined;
        const github = socials.github || undefined;

        return { email, linkedin, github, }
    }
}