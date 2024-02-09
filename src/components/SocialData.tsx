import React from "react";
import icons from "@/utils/icons";

export interface SocialData {
    href: string;
    icon: React.ReactNode;
}

const socialData: SocialData[] = [
    {
        href: "https://github.com/icekeys",
        icon: <icons.FaGithubAlt />,
    },
    {
        href: "https://discordapp.com/users/577504277207973928",
        icon: <icons.SiDiscord />,
    },
    {
        href: "https://www.instagram.com/ryancollingham",
        icon: <icons.FaInstagram />,
    },
    {
        href: "https://open.spotify.com/user/nkdosz5uulhwd9zkw3yg7gljm?si=efb65d83bebc46f2",
        icon: <icons.FaSpotify />,
    }
];

export default socialData;